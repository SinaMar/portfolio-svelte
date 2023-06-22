<script lang="ts">
    import {onMount} from "svelte";
    import deco from '../../assets/deco2.svg';

    export let name;
    export let mirror = false;

    let degree = 2;

    let innerWidth = window.innerWidth;
    let triangleHeight = innerWidth * Math.tan(degree * Math.PI / 180);

    let triangleSvg;

    const setTriangle = () => {
        triangleSvg.setAttribute("width", triangleSvg.parentElement.clientWidth + "px");
        innerWidth = window.innerWidth;
        triangleHeight = innerWidth * Math.tan(2 * Math.PI / 180);
    };

    onMount(() => {
        setTriangle();
    });
    const onResize = () => {
        setTriangle();
    };

    $: th = triangleHeight + 'px';
    let deg = (mirror ? -1 : 1) * degree + 'deg';
    let degMirror = (mirror ? 1 : -1) * degree + 'deg';

</script>


<svelte:window on:resize={onResize}/>
<header style="--triangle-height: {th}; --deg: {deg}; --deg-mirror: {degMirror}">
    <div class="section-header" class:mirror style="--section-header-translate: {triangleHeight / 2}px">
        <img src={deco} alt="" class="deco top">
        <h1 class:mirror> {name} </h1>
        <img src={deco} alt="" class="deco bottom">
    </div>

    <img src={deco} alt="" class="deco body-top" class:mirror>
    <svg class="triangle" bind:this={triangleSvg} class:mirror>
        <polygon fill="#21242C"
                 points={`0,0 ${innerWidth},${triangleHeight} 0,${triangleHeight}`}
        />
    </svg>
</header>

<style lang='scss'>

  .section-header {
    margin-top: 6rem;
    height: 2rem;
    background: var(--bg-dark);
    transform: rotateZ(var(--deg)) translateY(var(--section-header-translate));
  }

  h1 {
    font-family: var(--font-heading);
    position: absolute;
    text-align: left;
    bottom: 1.3rem;
    margin: 0;
    transform: rotateZ(var(--deg-mirror));
    left: 20%;

    &.mirror {
      left: unset;
      right: 20%;
    }
  }

  .triangle {
    position: relative;
    top: 0.5rem;
    height: var(--triangle-height);

    &.mirror {
      transform: scale(-1, 1);
    }
  }

  .deco {
    width: 100%;

    &.top {
      transform: translateY(-50%);
    }
    &.bottom {
      transform: translateY(-50%) scale(-1, -1);
    }
    &.body-top {
      transform: rotate(var(--deg)) translateY(var(--triangle-height));
    }
  }

</style>