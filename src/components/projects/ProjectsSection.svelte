<script lang="ts">
    import Project from "./Project3.svelte";
    import {projects} from "../../data/myData";
    import {onMount} from "svelte";
    import Project2 from "./Project.svelte";

    let y = 0;
    let projectDivs: NodeListOf<HTMLDivElement>;
    let projectNavbar: HTMLDivElement;
    let fixed = false;

    onMount(() => {
        projectDivs = document.querySelectorAll(".project-nav-target");
    })


    $: currentProjectId = () => {

        if (!projectDivs)
            return '';

        let a = y;
        let minId = '';
        let minY = Number.MAX_VALUE;

        projectDivs.forEach(x => {
            let currentY = Math.abs((x as HTMLDivElement).getBoundingClientRect().y);
            if (currentY < minY) {
                minY = currentY;
                minId = (x as HTMLDivElement).id;
            }
        })

        if(projectDivs.length)
            fixed =  ( projectDivs[0] as HTMLDivElement).getBoundingClientRect().y < 0 &&
                ( projectDivs[projectDivs.length-1] as HTMLDivElement).getBoundingClientRect().y > 0;

        console.log('fixed', fixed);
        console.log(( projectDivs[0] as HTMLDivElement).getBoundingClientRect().y)
        console.log(( projectDivs[projectDivs.length-1] as HTMLDivElement).getBoundingClientRect().y)
        console.log('..')

        return minId;
    }

</script>


<svelte:window bind:scrollY={y}/>

<p>Some projects I worked on during my career. </p>
<div class="projects-section">
    <div class="project-container">
        {#each projects as project, index}
            <div class="project-nav-target" id={project.name}></div>
            <div class="project-wrapper">
                <Project2 {project} mirror={!!(index % 2)}/>
            </div>
        {/each}
    </div>
    <aside>
        <ul>
            <li>Projects</li>
            {#each projects as {name} }
                <li class:active={currentProjectId() === name}>
                    <a class:activespan="{currentProjectId() === name}" href="#{name}">{@html name}</a>
                </li>
            {/each}
        </ul>
    </aside>
</div>


<style lang="scss">

  .projects-section {
    display: flex;
    justify-content: space-evenly;
  }

  .project-container {
    margin-right: 20px;
    margin-left: 30px;
  }

  p {
    color: var(--text);
    text-align: left;
    position: absolute;
    right: 20%;
  }

  .project-wrapper {
    padding-bottom: 6rem;
    padding-top: 6rem;
  }

  @media only screen and (max-width: 600px) {
    aside {
      display: none;
    }
  }

  aside {
    width: 12rem;
    position: relative;
    margin-top: 6rem;
    padding-right: 3rem;

    ul {
      list-style: none;
      position: sticky;
      padding-left: 1rem;
      top: 5rem;
      right: 0;
      text-align: left;
      border-left: 1px solid #464E5C;

      li:nth-child(1) {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        font-family: var(--font-heading);
        color: white;
      }

      li:nth-child(n+2) {
        font-size: 0.75rem;
        color: #868EA1;
        cursor: pointer;
        margin-bottom: 1rem;
        position: relative;

        a {
          text-decoration: none;
          color: #A6B1C8;
        }

        a:hover {
          color: white;
          font-weight: bold;
        }
      }
    }
  }

  .activespan {
    color: white !important;
    font-weight: bold;
  }

  .active:after {
    content: "";
    position: absolute;
    z-index: 10;
    top: 0;
    left: calc(-1rem - 1px);
    width: 1px;
    height: 1rem;
    background-color: var(--accent-color);
  }


</style>