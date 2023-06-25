<script lang="ts">

    import Carousel from "../../components/projects/Carousel.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectResponsibilities from "./ProjectResponsibilities.svelte";

    export let project;
    export let mirror = false;

    const {name, year, description, responsibilities, images, techs, mobile} = project;

</script>


<div class="project">

    <!--    <div class="border">-->
    <div class="content">
        {#if !mirror}
            <div class="carousel">
                <Carousel screenshots={images} mobile={mobile}/>
            </div>
        {/if}
        <div class="description">
            <ProjectDescription {name} {year} {description}/>
        </div>
        {#if mirror}
            <div class="carousel">
                <Carousel screenshots={images} mobile={mobile}/>
            </div>
        {/if}
        <div>
            <h4 class="text-underline">Responsibilities</h4>
        </div>
        <div class="responsibilities">
            <ProjectResponsibilities {responsibilities} {techs}/>
        </div>
        <div class="responsibilities">
            <ProjectResponsibilities {responsibilities} {techs}/>
        </div>
        <div>
            <div class="techs">
                {#each techs as tech}
                    <img src='/assets/techs/{tech}.svg' alt={tech}>
                {/each}
            </div>
        </div>
    </div>
    <!--    </div>-->

</div>


<style lang="scss">

  .carousel {
    max-width: 100vw;
  }

  .project {
    position: relative;
    //width: 60%;
    margin: auto;
  }

  .border {
    //border-top: 2rem solid transparent;
    //border-bottom: 2rem solid transparent;
    //border-image: url('/assets/border.svg') 10 stretch;
  }

  .content {
    //padding: 2rem;
    justify-content: center;
    //background-color: var(--bg);
    //display: grid;
    //display: flex;
    flex-wrap: wrap;
    max-width: 100vw;
    margin: auto;
    align-items: center;


    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr min-content min-content min-content;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    > div {
      margin: auto;
      max-width: 30rem;
    }

    //> div:nth-child(1) {
    //
    //}

    .description {

    }

    //> div:nth-child(2) {
    //  margin: auto;
    //
    //
    //}

    > div:nth-child(3) {
      grid-column: span 2;
      margin: 0;
    }

    > div:nth-child(4) {

    }

    > div:nth-child(5) {

    }

    > div:nth-child(6) {
        margin: 0;
    }

  }

  @media only screen and (max-width: 1000px) {
    .content {
      grid-template-columns: repeat(1, 1fr);
      //grid-template-rows: 1fr min-content min-content min-content;
      > div:nth-child(1) {
        //grid-row-start: 2;
        //grid-row-end: span 1;
      }

      .description {
        grid-row-start: 1;
        grid-row-end: span 1;
        //grid-row-start: 1;
        //grid-row-end: span 1;
        margin: auto;
      }

      > div:nth-child(3) {
        grid-column: span 1;
      }
    }
  }

  .responsibilities {
    flex-basis: 50%;
    //grid-column: 1 / -1;
    text-align: left;
  }

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

</style>