<script lang="ts">

    import Carousel from "../../components/projects/Carousel.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectResponsibilities from "./ProjectResponsibilities.svelte";

    export let project;
    export let mirror = false;

    const {name, year, description, responsibilities, images, techs, mobile} = project;

</script>


<div class="project">

<!--    <div class="item"></div>-->
<!--    <div class="item"></div>-->
<!--    <div class="item span-all"></div>-->

    <Carousel screenshots={images} mobile={mobile}/>
    <ProjectDescription {name} {year} {description}/>
    <div class="res">
        <ProjectResponsibilities {responsibilities} {techs}/>
    </div>

</div>


<style lang="scss">

  .project {
    width: 70%;
    margin: auto;
    background-color: var(--bg);
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two rows with automatic height */
    grid-gap: 10px; /* Gap between grid items */

  }

  .res {
    grid-column: 1 / -1;
    text-align: left;
  }



  .bg {
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
  }

</style>