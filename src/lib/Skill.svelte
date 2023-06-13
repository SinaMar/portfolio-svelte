<script lang="ts">

    import heart from '../assets/icons/heart.svg'
    import forward from '../assets/icons/forward.svg'

    export let name = 'Vite';
    export let fav = false;
    export let active = false;
    export let progress = 80;

    let logoPath = `src/assets/techs/${name}.svg`
</script>


<div>
    {#if fav}
        <img src={heart} alt="heart" class="heart">
    {/if}
    <img src={logoPath} alt="logo" class="tech-logo">
    <p>{name}</p>
    <div class="progress-bg">
        <div class="progress" style="width: {progress}%"></div>
        {#if active}
            <img src={forward} alt="active" class="forward">
        {/if}

    </div>
</div>

<style lang="scss">
  div {

    width: min-content;
    text-align: center;
    position: relative;

    .heart {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(20%, -20%);
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

    p {
      margin: 0;
      font-family: var(--font);
      color: hsl(220, 100%, 98%, 80%);
    }

    div {
      height: 0.5rem;
      width: 100%;
      border-radius: 2px;
      background-color: var(--bg-light);
      position: relative;
      text-align: center;

      div {
        background-color: var(--accent-color);
        border-radius: 2px 0 0 2px;
      }
    }

    .forward {
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translateX(100%) translateX(0.25rem) translateY(0%);
    }
  }

</style>

