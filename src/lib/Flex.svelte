<script lang="ts">
    import cssVars from 'svelte-css-vars';
    import type {justifyContent, position} from "../types/css";
    export let justifyContent: justifyContent = 'center';
    export let position: position = 'initial';
    export let style = '';

    let styleVars = {
        justifyContent,
        position
    }
</script>



<div use:cssVars={styleVars} style={style} >
    <div style:position="absolute"></div>
    <slot/>
</div>


<style lang="scss">
    div {
      //background-color: green;
        display: flex;
        justify-content: var(--justify-content);
    }
</style>