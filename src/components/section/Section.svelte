<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    import {onMount} from "svelte";
    import deco from '../../assets/deco2.svg';
    import {OBLIQUE_DEGREE} from "../../data/config";

    export let name;
    export let mirror = false;

    let innerWidth = window.innerWidth;
    let obliqueTopHeight = innerWidth * Math.tan(OBLIQUE_DEGREE * Math.PI / 180);

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

</script>

<svelte:window on:resize={onResize}/>

<section id={name} class:first={name==='Skills'}></section>

<SectionHeader {name} {obliqueTopHeight} {mirror} />

<div style="--oblique-top-height: {obliqueTopHeight + 'px'}; ">
    <img src={deco}  alt="" class="oblique-top-deco" class:mirror>
    <svg class="oblique-top" style="display: block;" bind:this={obliqueTopSvg} class:mirror>
        <polygon fill="#21242C" points={`0,0 ${innerWidth},${obliqueTopHeight} 0,${obliqueTopHeight}`}/>
    </svg>
</div>


<div class="section-body" >
    <slot/>
</div>
<div class="body-border-bottom"></div>

<style lang="scss">

  section {
    scroll-margin-top: 6rem;
    &.first {
      scroll-margin-top: 2rem;
    }
  }

  .section-body {
    background: var(--bg-dark);
  }

  .body-border-bottom {
    border-bottom: 1.3rem solid transparent;
    border-image: url('/assets/border-dark.svg') 10 stretch;
    width: 100%;
    margin-bottom: 16rem;
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
    transform: rotate(var(--oblique-deg)) translateY(52%);
    height: 17px;
    display: block;

    &.mirror {
      transform-origin: right;
      transform: rotate(var(--oblique-deg-mirror)) translateY(52%);

    }
  }
</style>
