<script lang="ts">
  import { onMount } from "svelte";

  import heart from "../assets/icons/heart.svg";
  import forward from "../assets/icons/forward.svg";

  export let grey = false;
  export let name = "Vite";
  export let fav = false;
  export let active = false;
  export let progress = 80;

  let logoPath = `/assets/techs/${name}.svg`;

  let nameText;

  onMount(() => {

    console.log('fs',window.getComputedStyle(nameText).fontSize);

    while (nameText.scrollWidth >= 62) {
            const fontSize = parseInt(
                window.getComputedStyle(nameText).fontSize
            );
            nameText.style.fontSize = `${ (fontSize - 1)/16}rem`;
        }
  });


  //------




</script>

<div class="skill"  class:grey

>
  {#if fav}
    <img src={heart} alt="heart" class="heart" />
  {/if}
  <img src={logoPath} alt="logo" class="tech-logo" />
  <div class="container">
    <div  class="text-container" >
      <span bind:this={nameText}>{name}</span>
    </div>
  </div>

  <div class="progress-bg">
    <div class="progress" style="width: {progress}%" > </div>
    {#if active}
      <img src={forward} alt="active" class="forward" />
    {/if}
  </div>
</div>

<style lang="scss">
  .skill{

    width: min-content;
    text-align: center;
    position: relative;
    transition: 0.4s;

    .progress-bg {
      height: 0.5rem;
      width: 100%;
      border-radius: 2px;
      background-color: var(--bg-light);
    }

    .progress {
      background-color: var(--accent-color);
      border-radius: 2px 0 0 2px;
      position: relative;
      text-align: center;
      height: 100%;
    }
  }
  .grey {
    filter: grayscale(1) blur(1px);
    opacity: 0.2;
    transition: 0.4s;
  }

  .container {
    // border: 1px solid black;

    overflow: hidden;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container {
  
    span {
      display: block;
      margin: 0;
      font-family: var(--font);
      font-size: 1rem;
      color: hsl(220, 100%, 98%, 80%);
    }
  }



  .heart {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(20%, -20%);
    width: 1rem;
  }

  .tech-logo {
    background-color: var(--bg);
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    padding: 1rem;
    margin: auto;
    display: block;
  }

  .forward {
    position: absolute;
    width: 0.5rem;
    right: 0;
    bottom: 0;
    transform: translateX(100%) translateX(0.25rem) translateY(0%);
  }
</style>
