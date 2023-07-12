<script lang="ts">

    import Carousel from "../../components/projects/Carousel.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import type {Project} from "../../types/Project";
    import ProjectResponsibility from "./ProjectResponsibility.svelte";
    import {getTechImageSrc} from "../../data/myData";

    export let project: Project;
    export let mirror = false;

    const {html, year, description, responsibilities, responsibilities2, images, techs, mobile} = project;

    console.log(project)

    // let count = responsibilities.length;

    // let seperation = (responsibilities.length % 2 === 0) ? responsibilities.length / 2 : responsibilities.length / 2 + 1;
    //
    // const responsibilitiesSplit1: string[] = responsibilities.slice(0, seperation);
    // const responsibilitiesSplit2: string[] = responsibilities.slice(seperation, responsibilities.length);



</script>


<div class="project">

    <!--    <div class="border">-->
    <div class="content">
        {#if !mirror}
            <div class="carousel">
                <Carousel screenshots={images} mobile={mobile}/>
            </div>
        {/if}
        <div class="description" class:mirror>
            <ProjectDescription name={html} {year} {description}/>
        </div>
        {#if mirror}
            <div class="carousel">
                <Carousel screenshots={images} mobile={mobile}/>
            </div>
        {/if}
        <div class="responsibilities-title">
            <h4 class="text-underline">Tasks & Responsibilities</h4>
        </div>
        <div class="responsibilities2">
            {#each responsibilities2 as responsibility}
                <ProjectResponsibility  {responsibility} />
            {/each}
        </div>
        <!--        <div class="responsibilities">-->
        <!--            <ProjectResponsibilities responsibilities={responsibilities1} />-->
        <!--        </div>-->
        <!--        <div class="responsibilities">-->
        <!--            <ProjectResponsibilities responsibilities={responsibilities2}  />-->
        <!--        </div>-->
        <div>
            <div class="techs">
                {#each techs as tech}
                    <img src={getTechImageSrc(tech)} alt={tech} title={tech} >
                {/each}
            </div>
        </div>
    </div>
    <!--    </div>-->

</div>


<style lang="scss">

  .responsibilities2{
    display: flex;
    flex-wrap: wrap;
    grid-column: span 2;
  }

  .carousel {
    max-width: 100vw;
  }

  .project {
    position: relative;
    margin: auto;
  }


  .content {
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100vw;
    margin: auto;
    align-items: center;


    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr min-content min-content min-content;
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;

    > div {
      //max-width: 30rem;
    }
  }

  .responsibilities-title {
    grid-column: span 2;
    margin: 0;
    padding-top: 3rem;
  }

  .description   {
    max-width: 30rem;
    margin: auto;
  }


  @media only screen and (max-width: 1000px) {
    .content {
      grid-template-columns: repeat(1, 1fr);

      .description {
        grid-row-start: 1;
        grid-row-end: span 1;
        //margin: auto;
      }

      .responsibilities-title {
        grid-column: span 1;
        margin: auto;

      }

      .responsibilities2 {
      grid-column: span 1;
        justify-content: center;
    }

        .carousel{
          grid-column: span 1;
        }
      > div:nth-child(2) {
        grid-column: span 1;
      }
    }
  }

  //.responsibilities {
  //  //flex-basis: 50%;
  //  //grid-column: 1 / -1;
  //  text-align: left;
  //  //height: max-content;
  //  margin-bottom: auto;
  //}

  .responsibilities-title {
    padding-left: 1.4rem;
  }

  .techs {
    display: flex;
    gap: 0.5rem;
    padding-left: 1.4rem;
    margin-top: 2rem;


    img {
      width: 2.5rem;
      aspect-ratio: 1;
      background-color: var(--bg-dark);
      padding: 0.5rem;
      padding-left: 0;
      border-radius: 10px;
    }
  }

</style>