<script>
    import { onMount } from "svelte";

    let textContainer;
    let dynamicText;
    onMount(() => {
        const textContainer2 = document.querySelector('.text-container');
        // console.log(textContainer2);

        while (dynamicText.scrollWidth > textContainer.offsetWidth) {
            const fontSize = parseInt(
                window.getComputedStyle(dynamicText).fontSize
            );
            dynamicText.style.fontSize = `${fontSize - 1}px`;
        }
    });
</script>

<div class="container">
    <div class="text-container" bind:this={textContainer}>
        <span class="dynamic-text" bind:this={dynamicText}>
            L asdasd asd sdasd asss
        </span>
    </div>
</div>

<style>
    .container {
        width: 100px;
        border: 1px solid black;
        overflow: hidden;
    }

    .text-container {
        /* display: flex;
        align-items: flex-end; */
    }

    .dynamic-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        font-size: 16px; /* initial font size */
    }
</style>
