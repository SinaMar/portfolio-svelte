<script lang="ts">
    import {onMount} from "svelte";
    export let name;
    export let mirrored = false

    let sh = '30';



    let innerWidth = window.innerWidth;

    	onMount(() => {
    		function onResize() {
                innerWidth = window.innerWidth;
    		}
    		window.addEventListener('resize', onResize);
    		return () => window.removeEventListener('resize', onResize);
    	});
</script>

<section id={name}></section>
<div class="section-heading" >
    <h1>
        {name}
    </h1>
</div>
<svg height={sh} width={innerWidth} class="triangle">
    <polygon fill="#21242C" points="0,0 {innerWidth},{sh} 0,{sh}" class="triangle2" />
</svg>

<div class="section-body">

    <slot></slot>

</div>


<style>

    section {
        scroll-margin-top: 4rem;
    }

   a {
       font-size: 32px;
       font-weight: bold;
        /*padding: 30px 0 8px;*/
        position: relative;
       z-index: 1;
    }

   a:hover::before {
       width: 100%;
       /*right: 0;*/
       content: "";
       position: absolute;
       /*bottom: 16px;*/
       bottom: 0;
       /*width: 100%;*/
       height: 8px;
       transform: skew(0deg)   translateY( -20%);
       background: #2EB775;

       left: 20%;
   }

   a::before {
        content: "";
        position: absolute;
        /*bottom: 16px;*/
       bottom: 0;
        /*width: 100%;*/
       width: 0;
        height: 8px;
        transform: skew(0deg)  translateY( -20%);
        background: #2EB775;
        z-index: -1;
       transition: width .5s, right 0.5s ;
       left: 20%;
    }

    .triangle{
        position: relative;
        top: 6px;
    }

    .triangle2{
        background: white;
    }

    .section-heading {

        margin-top: 3rem;
        height: 30px;
        transform: rotateZ(2deg);
        /*margin-bottom: 20px;*/
        position: relative;
        /*top: -20px;*/


        background: #21242C;
    }


    .section-body {
        padding: 1rem;
        background: var(--bg-dark);
        color: white;

    }


    h1 {
        font-family: var(--font-heading);
        transform: rotateZ(-2deg);

        position: absolute;
        /*text-align: center;*/
        bottom: 20px;
        /*z-index: 1;*/
        right: 20%;
        margin: 0;
    }
</style>