<script lang="ts">
    import pointBg from '../../assets/point-bg.svg'
    // import screenshot from '../../assets/screenshots/Bundesliga6-1.png'


    export let mirror = false;
    let sign = mirror ? -1 : 1;
    export let name;
    export let year;
    export let description: string;
    export let responsibilities: string[];
    export let images: string[] = [];

    let screenshot = `src/assets/screenshots/${images[0]}`

</script>


<div class="project-container2">
    <div class="project-bg" style={`transform: skew(${sign * 10}deg)`} class:mirror>
        <img src={screenshot} class:mirror style={``} alt="screenshot"
             class="screenshot">
        <img src={pointBg} alt="pointBg" class:mirror class="point-bg">
        <div class="content" style={`transform: skew(${sign * -10}deg)`}>
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
            </div>
        </div>
    </div>
</div>


<style lang="scss">



  .screenshot {
    position: absolute;
    z-index: 1;
    width: 200px;
    top: 50%;

    &:not(.mirror) {
      transform: skew(-10deg) translate(-90%, -50%);
      left: 0;
    }

    &.mirror {
      transform: skew(10deg) translate(90%, -50%);
      right: 0;
    }

  }


  .point-bg {
    position: absolute;
    top: 0;

    &:not(.mirror){
      transform: skew(-10deg) translate(20%, -25%);
      right: 0;
    }

    &.mirror {
      transform: skew(10deg) translate(-20%, -25%);
      left: 0;
    }
  }


  .project-bg {
    margin-top: 5rem;
    border-radius: 4px;
    max-width: 900px;
    background-color: var(--bg);
    padding: 3rem;

    border-top: 10px solid var(--accent-color) ;

    &:not(.mirror) {
      margin-left: auto;
    }
    &.mirror {
      margin-right: auto;
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 1rem;
    transform: skew(-10deg);
    text-align: left;

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

    p {
      font-size: 0.75rem;
      color: var(--text );
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

    //li::marker {
    //  content: "•";
    //  color: var(--accent-color);
    //  font-size: 1.3rem;
    //  transform: translateY(-50%);
    //}
  }


</style>