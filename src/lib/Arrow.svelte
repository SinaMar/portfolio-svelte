<script lang="ts">
    export let size = '16px';
    export let color = 'white';
    export let left = false;
</script>


<svg width={size} height={size}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
     stroke-width="1.5" stroke={color} class="w-6 h-6" class:left>
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

<style>
    .left {
        transform: scaleX(-1);
    }
</style>