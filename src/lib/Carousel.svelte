<script lang="ts">
    import img1 from "../assets/screenshots/Corerona-1.png"
    import img2 from "../assets/screenshots/Corerona-2.png"
    import img3 from "../assets/screenshots/Corerona-3.png"
    import img4 from "../assets/screenshots/Corerona-4.png"
    import img5 from "../assets/screenshots/Corerona-5.png"
    import {onMount} from "svelte";


    export let screenshots = [];
    export let mobile = false;


    let images = screenshots.map(x => `src/assets/screenshots/${x}`)

    // let images = [img1, img2, img3, img4, img5, img5];
    let pos = 0;
    let l = images.length;
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    let toggle = false
    let onClick = () => {
        toggle = !toggle;
    }

    let leftClick = () => {
        pos = clamp(pos - 1, 0, l - 1);
        console.log(pos)
    }

    let rightClick = () => {
        pos = clamp(pos + 1, 0, l - 1);
        console.log(pos)

    }

    let margin = 10;
    let gap = 60 ;
    let offset = gap + ( margin * (l -1))  ;

    let a = gap - (2 * margin);

    let imgWidth = mobile ? 200 : 300;
    let boxHeight = mobile ? 400 : 200;
    let gl =(gap / 2 - margin);
</script>

<div class="flex flexCenter flexCol">
    <div class="container">
        <button on:click={leftClick}  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16px" height="16px" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </button>
        <div class="box" style={`width: ${imgWidth + gap }px; height: ${boxHeight}px`}>
            <div class="subbox-contaienr" class:toggle
                 style={`transform: translateX( -${pos * imgWidth   - ((gap / 2 - margin) - (pos-1) * margin)}px);`}>
<!--                 style={`transform: translateX( -${pos * imgWidth - (pos === (l-1) ? offset : offset/2 )  }px);`}>-->
                {#each images as image}
                    <div class="subbox" style="width: {imgWidth}px">
                        <img src={image} alt="">
                    </div>

                {/each}

            </div>
        </div>
        <button on:click={rightClick}>
            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </button>
    </div>
    <div class="flex">
        {#each images as img, index}
            <div class="circle" on:click={() => {pos = index}} class:active={pos === index}></div>
        {/each}
    </div>
</div>


<style lang="scss">

  button {
    background-color: transparent;
    border: none;
    svg {
      stroke: var(--bg-light)
    }

  }

  button:hover {
    background-color: var(--accent-color);
    svg {
      stroke: white;
    }
  }





  .circle {
    cursor: pointer;
    margin: 8px;
    width: 16px;
    height: 16px;
    border-radius: 32px;
    background-color: var(--bg-light);

    &.active {
      background-color: var(--accent-color);
    }
  }



  .container {
    display: flex;
    justify-content: center;
    gap: 0;
    align-items: stretch;
    z-index: 10;
  }

  .box {
    display: flex;
    align-items: center;
    position: relative;
    //width: 250px;
    //height: 350px;
    //background-color: yellow;
    overflow: hidden;
  }

  .subbox-contaienr {
    display: flex;
    position: absolute;
    transition: 1s ease;
  }


  .subbox {
    //width: 200px;
    //height: 300px;
    //gap: 0;
    justify-content: center;
    flex-shrink: 0;

    img {
      width: 100%;
    }
  }

  .subbox:not(:last-child) {
    margin-right: 10px;
  }

  //.subbox:nth-child(1) {
  //  background-color: red;
  //
  //}
  //
  //.subbox:nth-child(2) {
  //  background-color: green;
  //}
  //
  //.subbox:nth-child(3) {
  //  background-color: blue;
  //}


  div {
    //display: flex;
    ////overflow: hidden;
    //position: relative;
    //width: 600px;
    //justify-content: center;

    //background-color: yellow;
    //overflow: hidden;
  }

  img {
    width: 400px;
    //position: relative;
    //clip-path: inset(0 80% 0 0);
    //clip-path: inset(0 0 0 80%);
    //clip-path: circle(50%);
    //overflow: hidden;
  }

  img:nth-child(1) {
    //transform: translateX(50%);
  }

</style>