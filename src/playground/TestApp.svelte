<script lang="ts">
    import { onMount } from "svelte";

    let redbox;

    onMount(() => {});
</script>

<div class="container">
    <div class="c1" />
    <div class="c2" bind:this={redbox} />
    <div class="c3" />
</div>

<style lang="scss">
    .container {
        position: relative;
    }
    .c1 {
        position: relative;
        height: 200px;
        background-color: green;
    }
    .c2 {
        position: relative;
        height: 200px;
        margin: auto;
        width: 50%;
        background-color: red;
        z-index: 20;
        // top: 100px;
    }
    .c3 {
        height: 200px;
        transform: translateY(-100px);
        background-color: blue;
        z-index: -10;
    }
</style>
