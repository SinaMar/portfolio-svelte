<script lang="ts">
    import {onMount} from "svelte";

    export let name;
    export let mirror = false;

    let innerWidth = window.innerWidth;
    console.log('innerWidth', innerWidth);

    let triangleHeight = innerWidth * Math.tan(2 * Math.PI / 180);

    let svg;

    const setTriangle = () => {
        svg.setAttribute("width", svg.parentElement.clientWidth + "px");
    };

    onMount(() => {
        setTriangle();
    });

    const onResize = (event) => {
        setTriangle();
        innerWidth = window.innerWidth;
        triangleHeight = innerWidth * Math.tan(2 * Math.PI / 180);
    };
</script>

<svelte:window on:resize={onResize}/>
<section id={name}></section>
<div class="section-heading" class:mirror>
    <h1 class:mirror>
        {name}
    </h1>
</div>


<svg height={triangleHeight} class="triangle" bind:this={svg} class:mirror>
    <polygon
            fill="#21242C"
            points={`0,0 ${innerWidth},${triangleHeight} 0,${triangleHeight}`}
    />
</svg>

<div class="section-body">
    <slot/>
</div>


<style lang="scss">
  section {
    scroll-margin-top: 2rem;
  }

  .section-heading {
    margin-top: 6rem;
    height: 30px;
    background: #21242c;

    &.mirror {
      transform: rotateZ(-2deg);
    }

    &:not(.mirror) {
      transform: rotateZ(2deg);
    }

    h1 {
      font-family: var(--font-heading);
      position: absolute;
      text-align: left;
      bottom: 20px;
      margin: 0;

      &.mirror {
        transform: rotateZ(2deg);
        right: 20%;
      }

      &:not(.mirror) {
        transform: rotateZ(-2deg);
        left: 20%;
      }
    }
  }

  .triangle {
    position: relative;
    top: 0.5rem;

    &.mirror {
      transform: scale(-1, 1);
    }
  }

  .section-body {
    padding: 1rem;
    padding-bottom: 3rem;
    background: var(--bg-dark);
    color: white;
    //margin-bottom: 16rem;
  }
</style>
