<script lang="ts">

    export let name;
    export let year;
    export let description;

</script>

<div>
    <h2 class="text-underline">{@html name}</h2>
    <p class="date">{year}</p>
    <p>{description}</p>
</div>

<style lang='scss'>

    div {
      flex-basis: 70%;
      text-align: left;
    }

    .date {
      color: var(--accent-color);
      font-weight: bold;
      font-size: 0.625rem;
      margin: 0
    }

    p {
      font-size: 0.75rem;
      color: var(--text);
    }

</style>