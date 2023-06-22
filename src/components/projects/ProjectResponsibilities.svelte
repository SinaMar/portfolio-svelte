<script lang="ts">
    export let responsibilities;
    export let techs;
</script>

<div>
    <h4 class="text-underline">Responsibilities</h4>
    <ul>
        {#each responsibilities as responsibility}
            <li>{responsibility}</li>
        {/each}
    </ul>
    <div class="techs">
        {#each techs as tech}
            <img src='/assets/techs/{tech}.svg' alt={tech}>
        {/each}
    </div>
</div>

<style lang='scss'>

  div {
    text-align: left;
  }

  p {
    font-size: 0.75rem;
    color: var(--text);
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