<script lang="ts">
    import {onMount} from "svelte";
    import deco from '../../assets/deco2.svg';

    export let name;
    export let mirror = false;

    let obliqueDegree = 2;

    let innerWidth = window.innerWidth;
    let obliqueTopHeight = innerWidth * Math.tan(obliqueDegree * Math.PI / 180);
    let obliqueTopSvg;

    const setObliqueTopDimensions = () => {
        obliqueTopSvg.setAttribute("width", obliqueTopSvg.parentElement.clientWidth + "px");
        innerWidth = window.innerWidth;
        obliqueTopHeight = innerWidth * Math.tan(2 * Math.PI / 180);
    };

    onMount(() => {
        setObliqueTopDimensions();
    });
    const onResize = () => {
        setObliqueTopDimensions();
    };

    $: th = obliqueTopHeight + 'px';
    let deg = (mirror ? -1 : 1) * obliqueDegree + 'deg';
    let degMirror = (mirror ? 1 : -1) * obliqueDegree + 'deg';

</script>


<svelte:window on:resize={onResize}/>
<header style="--oblique-top-height: {th}; --deg: {deg}; --deg-mirror: {degMirror}">
    <div class="section-header-line"  style="--section-header-translate: {obliqueTopHeight / 2}px" class:mirror>
        <h1 class:mirror> {name} </h1>
    </div>
    <img src={deco}  alt="" class="oblique-top-deco" class:mirror>
    <svg class="oblique-top" style="display: block;" bind:this={obliqueTopSvg} class:mirror>
        <polygon fill="#21242C" points={`0,0 ${innerWidth},${obliqueTopHeight} 0,${obliqueTopHeight}`}/>
    </svg>
</header>

<style lang='scss'>

  .section-header-line {
    margin-top: 6rem;
    height: 2rem;
    transform: rotateZ(var(--deg)) translateY(var(--section-header-translate));
    border-top: 1.3rem solid transparent;
    border-bottom: 1.3rem solid transparent;
    border-image: url('/assets/border1.svg') 10 stretch;
  }

  h1 {
    font-family: var(--font-heading);
    position: absolute;
    text-align: left;
    margin: 0;
    transform: rotateZ(var(--deg-mirror));
    left: 20%;
    bottom: 0.5rem;

    &.mirror {
      left: unset;
      right: 20%;
    }
  }

  .oblique-top {
    position: relative;
    height: var(--oblique-top-height);

    &.mirror {
      transform: scale(-1, 1);
    }
  }

  .oblique-top-deco {
    width: 100%;
    position: relative;
    transform-origin: left;
    transform: rotate(var(--deg)) translateY(52%);
    height: 17px;
    display: block;

    &.mirror {
      transform-origin: right;
    }
  }

</style>