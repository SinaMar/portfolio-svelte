<script lang="ts">
    import Logo from '../assets/SinaMartensLogo.svg'
    import {onMount} from "svelte";

    let navbar: HTMLElement;
    let offset: number;
    let sticky = false;
    let current = "";
    let sections;
    let navLi;


    onMount(() => {
        offset = navbar.offsetTop + 8;
        sections = document.querySelectorAll("section");
        navLi = document.querySelectorAll("nav #nav-content a");
        console.log(navLi)

    })

    window.onscroll = () => {
        sticky = window.pageYOffset >= offset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 64) {
                current = section.getAttribute("id");
            }
        });


    };

</script>

<div id="nav-container" class:sticky>
    <img src={Logo} style={  `height: ${sticky ? 30 : 60}px`} class="logo" alt="Logo"/>
    <nav id="navbar" bind:this={navbar}>
        <div id="nav-content">
            <a href="#About" class:active={current==="About"}>.About</a>
            <a href="#Skills" class:active={current==="Skills"}>.Skills</a>
            <a href="#Projects" class:active={current==="Projects"}>.Projects</a>
            <a href="#Interests" class:active={current==="Interests"}>.Interests</a>
            <a href="#Contact" class:active={current==="Contact"}>.Contact</a>
        </div>

    </nav>
</div>


<style>

    .logo {
        margin-right: 1rem;
        transition: height 0.3s;
    }

    .sticky {
        position: fixed;
        top: 0;
        z-index: 10;
        margin-top: 0 !important;
    }

    #nav-container {
        margin-top: 1rem;
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
        transition: width .3s;
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
</style>