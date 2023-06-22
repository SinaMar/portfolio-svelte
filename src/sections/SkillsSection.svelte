<script lang="ts">
    import Skill from "../lib/Skill.svelte";
    import {allSkills} from "../data/myData";
    import {Category} from "../types/Skill";
    import workIcon from "../assets/icons/work2.svg"
    import learningIcon from "../assets/icons/learning2.svg"
    import heartIcon from "../assets/icons/heart.svg";
    import forwardIcon from "../assets/icons/forward.svg";
    import {flip} from 'svelte/animate';


    let filter: Category | null = null;
    let favFilter: boolean;
    let categories = Object.values(Category);

    let workSkills = allSkills.filter(x => x.workExperience === true);
    let personalSkills = allSkills.filter(x => x.workExperience === false);

    function compareFn(a, b) {
        if (b.category !== filter && a.category === filter) {
            return -1;
        }
        if (a.category === filter && b.category !== filter) {
            return 1;
        }
        return 0;
    }

    $: sortedWorkSkills = filter ? workSkills.sort((a, b) => b.progress - a.progress).sort(compareFn) : workSkills.sort((a, b) => b.progress - a.progress);
    $: sortedPersonalSkills = filter ? personalSkills.sort((a, b) => b.progress - a.progress).sort(compareFn) : personalSkills.sort((a, b) => b.progress - a.progress);

    const setFilter = (cat: Category | null) => {
        filter = cat;
    }


</script>
<div class="section-description">
    <div>Technologies I used at work and for my personal projects.</div>
    <div>
        <img src={forwardIcon} alt="forward">  currently active using and learning
    </div>
    <div>
        <img src={heartIcon} alt="heart"> just fell in love with
    </div>
</div>


<div class="skill-container">


    <ul>
        <li class="filter" class:selected={!filter} on:click={() => {setFilter(null)}}>All</li>
        {#each categories as category }
            <li class="filter" class:selected={filter === category}
                on:click={() => {setFilter(category)}}>{category}</li>
        {/each}
    </ul>

    <div class="skills-container">
        <div>
            <h3><img src={workIcon} alt="work icon"> Work Experience</h3>
            <div class="skills">
                {#each sortedWorkSkills as {name, progress, favourite, active, category} (name)}
                    <div animate:flip="{{duration: 500}}">
                        <Skill name={name} progress={progress} fav={favourite} active={active}
                               grey={filter && category !== filter}/>
                    </div>
                {/each}
            </div>
        </div>

        <div>
            <h3><img src={learningIcon} alt="work icon"> Personal Interest</h3>
            <div class="skills">
                {#each sortedPersonalSkills as {name, progress, favourite, active, category} (name)}
                    <div animate:flip="{{duration: 500}}">
                        <Skill name={name} progress={progress} fav={favourite} active={active}
                               grey={filter && category !== filter}/>
                    </div>
                {/each}

            </div>
        </div>


    </div>

</div>


<!--<div class="work-skills">-->


<style lang="scss">



  .section-description {
    text-align: left;
    width: 60%;
    margin: auto;

    > div {
      color: var(--text);
      font-size: 0.75rem;

    }
    > div:first-child {
      color: var(--text-intense);
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    img {
      vertical-align:middle;
      line-height: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  }

  .skill-container {
    width: 60%;
    margin: auto;
    padding-bottom: 6rem;
    min-height: 80vh;
    transition: 2s;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  p {
    left: 20%;
    position: relative;
    width: fit-content;
    text-align: left;
    margin-bottom: 3rem;
    color: var(--text);

  }

  h3 {
    text-align: left;
    font-family: var(--font-heading);
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    img {
      vertical-align: middle;
    }
  }

  //
  @media screen and (min-width: 901px) {
    .skills-container {
      flex-wrap: nowrap;
    }
  }

  @media screen and (max-width: 900px) {
    .skills-container {
      flex-wrap: wrap;
    }
  }

  .skills-container {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
  }

  .filter {
    color: #DFE2EB;
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
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    //flex-wrap: wrap;
    gap: 2rem;

    > div {
      background-color: transparent;
    }
  }


</style>
