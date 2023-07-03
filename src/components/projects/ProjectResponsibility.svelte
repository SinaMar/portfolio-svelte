<script lang="ts">
    export let responsibility;
</script>

<div class="responsibility">
    <!--    <img src='/assets/tasks/res1.svg' alt="" width="40px">-->
    <p class="name">{responsibility.name}</p>
    <p class="description">{responsibility.description}</p>
</div>

<style lang='scss'>
  .responsibility {
    flex-basis: 15%;
    min-width: 13.75rem;
    background: var(--bg);
    border: 1.3rem solid transparent;;
    border-image: url('/assets/border2.svg') 10 stretch;
    border-image-outset: 0.5rem;

    margin: 1rem;


  }

  .name {
    font-weight: bold;
  }

  .description {
    color: var(--text);
    font-size: 0.875rem;
  }
</style>