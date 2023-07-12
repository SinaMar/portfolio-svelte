<script lang="ts">
    import {projects} from "../../data/projects";

    let closed = false;
    export let navItems;
</script>


<div class={$$props.class + " burger-menu"}>
    <button class="button" on:click={() => closed = !closed}>
        Menu

    </button>
    <div class="nav" class:closed>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li>
                <a href="#Projects">Projects </a>
                <ul>
                    {#each projects as project}
                        <li class="project"><a href="#{project.name}">{project.name}</a></li>
                    {/each}
                </ul>
            </li>
            <li><a href="#Interests">Interests </a></li>
            <li><a href="#Contact">Contact Me </a></li>
        </ul>
    </div>
</div>


<style lang='scss'>

  .burger-menu {
    position: fixed;
    right: 0;
    z-index: var(--layer-nav);
    display: flex;
    flex-direction: column;

  }

  .nav {
    //width: 20%;

    overflow: auto;
    text-align: left;
    height: 30%;
    background: var(--bg-dark);
    border: 2px solid var(--accent-color);

    ul {
      margin: 0;
      text-decoration: none;
      > li {
        padding: 0.5rem;
      }
    }

    .project {
      padding: 0.25rem;
      font-size: 0.75rem;
    }

  }

  .closed {
    display: none;
  }

  .button {
    border: none;
    margin-left: auto;
    width: 4rem;
    aspect-ratio: 1;
    background: white;
    background: var(--bg-dark);
    cursor: pointer;
  }

</style>