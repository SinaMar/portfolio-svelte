<script lang="ts">
    import cssVars from 'svelte-css-vars';
    import type {justifyContent, position} from "../types/css";
    export let justifyContent: justifyContent = 'center';
    export let position: position = 'initial';
    export let style = '';
    export let column = false;

    let styleVars = {
        justifyContent,
        position,
        flexDirection: column ? 'column' : 'row'
    }

    console.log(styleVars);
    
    
</script>



<div use:cssVars={styleVars} style={style} >
    <slot/>
</div>


<style lang="scss">
    div {
      //background-color: green;
        display: flex;
        justify-content: var(--justifyContent);
        flex-direction: var(--flexDirection);
    }
</style>