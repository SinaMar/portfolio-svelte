<script lang="ts">
    import Logo from '../../assets/SinaMartensLogo.svg'
    import {onMount} from "svelte";

    let navbar: HTMLElement;
    let offset: number;
    let sticky;
    let sections;
    let y = 0;

    let target;
    // Create a new Intersection Observer instance
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         // Check if the target element is intersecting with the viewport
    //         if (entry.isIntersecting) {
    //             // Perform actions when the element is in view
    //             sticky = false;
    //             console.log('Element is in view');
    //         } else {
    //             sticky = true;
    //
    //             // Perform actions when the element is not in view
    //             console.log('Element is out of view');
    //         }
    //     });
    // });

    // Start observing the target element


    let sectionMap = {};

    onMount(() => {
        // observer.observe(target);

        offset = navbar.offsetTop + 20;
        sections = document.querySelectorAll("section");
        sections.forEach(x => {
            //TODO: window.innerHeight dynamic, since it can change
            sectionMap[x.getAttribute("id")] = x.offsetTop - (window.innerHeight / 2);
        })
        console.log(sections);
        // navLi = document.querySelectorAll("nav #nav-content a");

        // const onScroll = () => {
        //     sticky = window.scrollY >= offset;
        //     console.log('scrollY',scrollY);
        //     // console.log('offset', offset);
        //
        //     sections.forEach((section) => {
        //         const sectionTop = section.offsetTop;
        //         if (pageYOffset >= sectionTop - 200) {
        //             current = section.getAttribute("id");
        //             console.log(current)
        //         }
        //     });
        //
        // };

    })


    $: sticky = y >= offset;
    export let navItems;

</script>

<svelte:window bind:scrollY={y}/>

<div id="nav-container" class={$$props.class}  >
    <img src={Logo} style={  `height: ${sticky ? 2 : 4}rem`} class="logo" alt="Logo"/>
    <nav id="navbar" bind:this={navbar} class:sticky>
        <div id="nav-content">
            <a href="#" class:active={ y < sectionMap[navItems[0]]}>.About</a>
            {#each navItems as item, i }
                {#if i < navItems.length - 1}
                    <a href="#{item}" class:active={y >= sectionMap[item]  && y < sectionMap[navItems[i+1]]}>.{item}</a>
                {:else}
                    <a href="#{item}" class:active={y >= sectionMap[item]}>.{item}</a>
                {/if}
            {/each}
        </div>

    </nav>
</div>


<!--<div class="burger mobile">-->

<!--</div>-->

<style>

    .target {
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        background: white;
        width: 100%;
        z-index: -10;
    }

    .burger {
        background: var(--bg);
        width: 50px;
        height: 50px;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 20;

    }

    .sticky {
        /*background: var(--accent-color)!important;*/
        border-bottom: 2px solid var(--accent-color);
        transition: background-color 0.7s;
    }


    .logo {
        margin-right: 1rem;
        transition: height 0.3s;
    }

    #nav-container {
        position: sticky;
        z-index: 20;
        top: 0;
        /*margin-top: 2rem;*/
        display: flex;
        align-items: center;
        width: 100%;
    }

    #nav-content {
        width: fit-content;
        text-align: right;
        margin-left: auto;
        padding-right: 2rem;
    }

    nav {
        position: relative;
        right: 0;
        padding: 0.5rem;
        background: var(--bg-dark);
        width: 100%;
        margin-right: 0;
        transition: width .3s, background-color 0.2s;
        height: fit-content;

    }

    nav::before {
        content: "";
        height: 100%;
        width: 2rem;
        border-radius: 0.25rem;
        top: 0;
        left: 0;
        position: absolute;
        transform: skew(20deg) translateX(-50%);
        background: var(--bg-dark);

    }

    a {
        margin-left: 1rem;
        font-family: var(--font);
        font-size: 1rem;
        font-weight: bold;
        position: relative;
        z-index: 1;
        text-decoration: none;
        color: white;

    }

    .active::before {
        color: yellow;
        width: 85%;
        content: "";
        position: absolute;
        bottom: 0;
        transform: skew(0deg) translateY(-20%);
        background: var(--accent-color);
        left: 20%;
    }

    a:hover::before {
        width: 85%;
        content: "";
        position: absolute;
        bottom: 0;
        transform: skew(0deg) translateY(-20%);
        background: var(--accent-color);
        left: 20%;
    }

    a::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0.25rem;
        transform: skew(0deg) translateY(-20%);
        background: var(--accent-color);
        z-index: -1;
        transition: width .3s, right 0.3s;
        left: 20%;
    }

    @media screen and (min-width: 613px) {
        .desktop {
            display: block;
        }

        .mobile {
            display: none;
        }
    }

    /* Mobile styles */
    @media screen and (max-width: 612px) {
        .desktop {
            display: none !important;
        }

        .mobile {
            display: block;
        }
    }
</style>