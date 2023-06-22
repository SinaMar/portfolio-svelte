<script lang="ts">

    import Carousel from "../../components/projects/Carousel.svelte";
    import ProjectDescription from "./ProjectDescription.svelte";
    import ProjectResponsibilities from "./ProjectResponsibilities.svelte";

    export let project;
    export let mirror = false;

    const {name,year, description, responsibilities, images , techs, mobile} = project;

</script>

§
<div class="project">
    {#if !mirror}
        <Carousel screenshots={images} mobile={mobile}/>
    {/if}
    <div class="bg" class:mirror>
        <div class="content" class:mirror>
            <ProjectDescription {name} {year} {description}/>
            <ProjectResponsibilities {responsibilities} {techs}/>
        </div>
    </div>
    {#if mirror}
        <Carousel screenshots={images}  mobile={mobile}/>
    {/if}
</div>


<style lang="scss">

  .project {
    display: flex;
    justify-content: center;
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