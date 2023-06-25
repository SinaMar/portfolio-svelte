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
<!--        <img src={deco} alt="" class="deco top">-->
        <h1 class:mirror> {name} </h1>
<!--        <img src={deco} alt="" class="deco bottom">-->
    </div>

    <img src={deco} style="display: block;" alt="" class="deco body-top" class:mirror>
<!--    <div class="t"></div>-->
    <svg class="triangle" style="display: block;" bind:this={triangleSvg} class:mirror>
        <polygon fill="#21242C"
                 points={`0,0 ${innerWidth},${triangleHeight} 0,${triangleHeight}`}
        />
    </svg>
</header>

<style lang='scss'>
  .t {
    height: 20px;
    background: white;
    width: 100%;
  }

  header {
    position: relative;
  }

  .section-header {
    margin-top: 6rem;
    height: 2rem;
    //background: var(--bg-dark);
    transform: rotateZ(var(--deg)) translateY(var(--section-header-translate));


      border-top: 1.3rem solid transparent;
      border-bottom: 1.3rem solid transparent;
      border-image: url('/assets/border1.svg') 10 stretch;

  }

  h1 {
    font-family: var(--font-heading);
    position: absolute;
    text-align: left;
    //bottom: 1.3rem;
    margin: 0;
    transform: rotateZ(var(--deg-mirror));
    left: 20%;
    bottom: 0.5rem;

    &.mirror {
      left: unset;
      right: 20%;
    }
  }

  .triangle {
    position: relative;
    //top: 0.5rem;
    height: var(--triangle-height);

    &.mirror {
      transform: scale(-1, 1);
    }
  }

  .deco {
    width: 100%;

    //object-fit: cover;
    &.top {
      transform: translateY(-50%);
    }
    &.bottom {
      transform: translateY(-50%) scale(-1, -1);
    }
    &.body-top {
      position: relative;
      //top: 0;
      //transform-origin: left top;
      //top: var(--triangle-height);

      //top: 17px;
      transform-origin: left;
      transform: rotate(var(--deg)) translateY(50%); // translateY( var(--triangle-height)) ;

      height: 17px;
      &.mirror {
        transform-origin: right;
      }

    }
  }

  @media only screen and (min-width: 1048px) {
    .deco .body-top {
      //width: 100%;

    }

  }

</style>