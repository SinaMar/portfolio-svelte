<script lang="ts">

    import {clamp} from "../../util";

    export let screenshots = [];
    let images = screenshots.map(x => `/assets/screenshots/${x}`)
    export let mobile = false;

    let pos = 0;
    let size = images.length;

    let leftClick = () => {
        pos = clamp(pos - 1, 0, size - 1);
    }

    let rightClick = () => {
        pos = clamp(pos + 1, 0, size - 1);
    }

    let margin = 10;
    let gap = 60;
    let imgWidth = mobile ? 200 : 300;
    let boxHeight = mobile ? 400 : 200;

</script>

<div class="flex flexCenter flexCol">
    <div class="container">
        <button on:click={leftClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" width="16px" height="16px" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

        </button>
        <div class="box" style:width='{imgWidth + gap}px' style:height='{boxHeight}px'>
            <div class="image-container"
                 style={`transform: translateX( -${pos * imgWidth   - ((gap / 2 - margin) - (pos-1) * margin)}px);`}>
                {#each images as image}
                    <div class="image" style:width='{imgWidth}px'>
                        <img src={image} alt="">
                    </div>

                {/each}

            </div>
        </div>
        <button on:click={rightClick}>
            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke-width="1.5" class="w-6 h-6" >
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>

        </button>
    </div>
    <div class="flex">
        {#each images as img, index}
            <button class="circle" on:click={() => {pos = index}} class:active={pos === index}></button>
        {/each}
    </div>
</div>


<style lang="scss">

  button {
    background-color: transparent;
    border: none;

    svg {
      stroke: var(--text);
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
    overflow: hidden;
  }

  .image-container {
    display: flex;
    position: absolute;
    transition: 1s ease;
  }


  .image {
    justify-content: center;
    flex-shrink: 0;

    img {
      width: 100%;
    }
  }

  .image:not(:last-child) {
    margin-right: 10px;
  }


  img {
    width: 400px;
  }


</style>