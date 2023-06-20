<script lang="ts">

    import Carousel from "../../lib/Carousel.svelte";

    export let mirror = false;
    let sign = mirror ? -1 : 1;
    export let name;
    export let year;
    export let description: string;
    export let responsibilities: string[];
    export let images: string[] = [];
    export let techs: string[] = []

    export let mobile;

    // let screenshot = `src/assets/screenshots/${images[0]}`
    let screenshot = `/assets/screenshots/${images[0]}`

</script>


<div class="project-container2">
    {#if !mirror}
            <Carousel screenshots={images} mobile={mobile}/>
    {/if}
    <div class="project-bg" class:mirror>
        <div class="content" class:mirror>
            <div>
                <h2 class="backline">{@html name}</h2>
                <div class="bl"></div>
                <p class="date">{year}</p>
                <p>{description}</p>
            </div>
            <div>
                <h4 class="backline">Responsibilities</h4>
                <ul>
                    {#each responsibilities as responsibility}
                        <li>{responsibility}</li>
                    {/each}
                </ul>
                <div class="techs">
                    {#each techs as tech}
                        <img src='/assets/techs/{tech}.svg' alt={tech}>
                    {/each}
                </div>
            </div>
        </div>

    </div>
    {#if mirror}
        <Carousel screenshots={images}  mobile={mobile}/>
    {/if}

</div>


<style lang="scss">

  .techs {
    display: flex;
    gap: 0.5rem;

    img {
      width: 2rem;
      height: 2rem;
      background-color: var(--bg-dark);
      padding: 0.5rem;
      border-radius: 10px;
    }
  }

  .project-container2 {
    display: flex;
    justify-content: center;
  }


  .screenshot {
    align-self: center;
    flex-basis: 20%;

    object-fit: contain;
    max-width: 300px;
    max-height: 300px;
    margin-top: 50px;
    margin-bottom: 50px;

    z-index: 1;
    flex-shrink: 0;
    flex-grow: 0;
  }


  //.point-bg {
  //  position: absolute;
  //  top: 0;
  //
  //  &:not(.mirror) {
  //    transform: skew(-10deg) translate(20%, -25%);
  //    right: 0;
  //  }
  //
  //  &.mirror {
  //    transform: skew(10deg) translate(-20%, -25%);
  //    left: 0;
  //  }
  //}


  .project-bg {
    max-width: 900px;
    border-radius: 4px;
    background-color: var(--bg);
    padding: 3rem;

    border-top: 10px solid var(--accent-color);

    &:not(.mirror) {
      transform: skew(10deg);
    }

    &.mirror {
      transform: skew(-10deg);
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;

    &:not(.mirror) {
      transform: skew(-10deg);
    }

    &.mirror {
      transform: skew(10deg);
    }

    .backline {
      position: relative;
      width: min-content;
    }

    .backline::after {
      content: "";
      position: relative;
      width: 100%;
      display: block;
      height: 1em;
      transform: translate(20%, -0.75em);
      background: var(--bg-dark);
      z-index: -1;
    }

    .date {
      color: var(--accent-color);
      font-weight: bold;
      font-size: 0.625rem;
      margin: 0

    }

    > div:nth-child(1) {
      flex-basis: 70%;
    }

    > div:nth-child(2) {
      flex-basis: 100%;
    }

    p {
      font-size: 0.75rem;
      color: var(--text);
    }

    ul {
      list-style: none;
      padding-left: 1rem;
      color: var(--text-intense);
    }

    li {
      font-size: 0.75rem;
      line-height: 1.3;
      position: relative;
      padding-bottom: 0.5rem;
    }

    li::before {
      vertical-align: middle;
      content: "";
      position: absolute;
      top: 0.5rem;
      left: 0;
      transform: translateY(-50%) translateX(-150%);
      width: 0.4rem;
      height: 0.4rem;
      background-color: var(--accent-color);
      border-radius: 50%;
    }

  }


</style>