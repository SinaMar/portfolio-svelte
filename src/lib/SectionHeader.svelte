<script lang="ts">
    import {onMount} from "svelte";

    export let name;
    export let mirrored = false;
    let sign = mirrored ? -1 : 1;
    let deg = 2;
    let sh = '30';

    let innerWidth = window.innerWidth;
    let svg;
    let svgWidth;


    onMount(() => {

        const containerWidth = svg.parentElement.clientWidth + "px";
        svg.setAttribute('width', containerWidth);
        function onResize() {
            svgWidth = svg.parentElement.clientWidth ;
            svg.setAttribute('width', svgWidth + "px");
        }

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });
</script>

<section id={name}></section>
<div class="section-heading" style={`transform: rotateZ(${sign * deg}deg)`}>
    <h1 style={`transform: rotateZ(${-1 * sign * deg}deg); ${mirrored ? 'right' : 'left'}: 20%`} >
        {name}
    </h1>
</div>

<svg height={sh}  class="triangle" bind:this={svg} style={`transform: scale(${sign},1)`}>
    <polygon fill="#21242C" points={ `0,0 ${innerWidth},${sh} 0,${sh}` } />
</svg>

<div class="section-body">

    <slot></slot>

</div>


<style lang="scss">

  section {
    scroll-margin-top: 2rem;
  }

  .section-heading {

    margin-top: 6rem;
    height: 30px;
    //transform: rotateZ(2deg);
    position: relative;
    background: #21242C;

    h1 {
      font-family: var(--font-heading);
      //transform: rotateZ(-2deg);
      position: absolute;
      text-align: left;
      bottom: 20px;
      //left: 20%;
      margin: 0;
    }
  }

  .triangle {
    position: relative;
    top: 6px;
  }

  .section-body {
    padding: 1rem;
    padding-bottom: 3rem;
    //padding-top: 3rem;
    background: var(--bg-dark);
    color: white;
  }

</style>

