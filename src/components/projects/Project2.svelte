<script lang="ts">

    import Carousel from "../../components/projects/Carousel.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectResponsibilities from "./ProjectResponsibilities.svelte";

    export let project;
    export let mirror = false;

    const {name, year, description, responsibilities, images, techs, mobile} = project;

</script>


<div class="project">
    <div class="border">
        <div class="content">
            <Carousel screenshots={images} mobile={mobile}/>
            <ProjectDescription {name} {year} {description}/>
            <div class="responsibilities">
                <ProjectResponsibilities {responsibilities} {techs}/>
            </div>
        </div>
    </div>

</div>


<style lang="scss">

  .project {
    position: relative;
    width: 60%;
    margin: auto;
  }

  .border {
    border: 30px solid transparent;
    border-image: url('/assets/border.svg') 10 stretch;
  }

  .content {
    padding: 2rem;
    background-color: var(--bg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

  }

  .responsibilities {
    grid-column: 1 / -1;
    text-align: left;
  }


</style>