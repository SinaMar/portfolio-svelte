<script lang="ts">
    import Skill from "../lib/Skill.svelte";
    import {workSkills} from "../data/Skills";
    import {Category} from "../types/Skill";
    import workIcon from "../assets/icons/work2.svg"
    import learningIcon from "../assets/icons/learning2.svg"

    let filter: Category | null = null;
    let favFilter: boolean;
    let categories = Object.values(Category);

    const setFilter = (cat: Category | null) => {
        filter = cat;
    }

</script>

<div class="container">


<p>Technologies I used at work and for my personal projects.</p>

<ul>
    <li class="filter" class:selected={!filter} on:click={() => {setFilter(null)}}>All</li>
    {#each categories as category }
        <li class="filter" class:selected={filter === category} on:click={() => {setFilter(category)}}>{category}</li>
    {/each}
</ul>

<div class="skills-container">
    <div>
        <h3><img src={workIcon} alt="work icon"> Work Experience</h3>
        <div class="skills">
            {#each workSkills.filter(x => (!filter || x.category === filter)) as {name, progress, favourite, active} (name)}
                <Skill name={name} progress={progress} fav={favourite} active={active}/>
            {/each}
        </div>
    </div>

    <div>
        <h3><img src={learningIcon} alt="work icon"> Personal Interest</h3>
        <div class="skills">
            {#each workSkills.filter(x => (!filter || x.category === filter)) as {name, progress, favourite, active} (name)}
                <Skill name={name} progress={progress} fav={favourite} active={active}/>
            {/each}
        </div>
    </div>


</div>

</div>


<!--<div class="work-skills">-->



<style lang="scss">

  .container {
    max-width: 70%;
    margin: auto;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-block-start: 0;
  }

  p {
    text-align: left;
    margin-bottom: 3rem;
  }

  h3 {
    text-align: left;
    font-family: var(--font-heading);
    font-size: 1rem;

    img {
      vertical-align: middle;
    }
  }

  .skills-container {
    //max-width: 70%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .filter {
    cursor: pointer;
    font-family: var(--font);
    font-weight: bold;
    position: relative;
    z-index: 1;

    &.selected:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 85%;
      height: 25%;
      background: var(--accent-color);
      left: 20%;
      z-index: -1;
    }

    &:hover:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 85%;
      height: 25%;
      background: var(--accent-color);
      left: 20%;
      z-index: -1;
    }
  }



  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }




</style>
