<script lang="ts">
    export let secondary = false;
</script>

<button class:secondary>
    <span></span>
    <slot/>
    <span></span>
</button>

<style lang='scss'>

  button {
    background: hsl(155, 73%, 43% );
    border: 0.1em solid  hsl(155, 73%, 33% );
    //border-radius: 100vw;
    border-radius: 0.375rem 1.25rem;
    padding: 0.625rem 2rem;
    position: relative;
    transition: background-color 250ms;
    cursor: pointer;
    isolation: isolate;
    overflow: hidden;
    font-size: 1rem;
    font-weight: bold;

    &.secondary {
      background: transparent;
    }
  }

  button:hover,
  button:focus-visible {
    background: hsl(155, 73%, 33% );
    &.secondary {
    background: hsla(155, 73%, 33%, 0.1 )
    }

  }

  span {
    position: absolute;
    width: 33.333%;
    height: 100%;
    background: transparent;
    z-index: -1;

    opacity: 0.5;
    &:first-child{
      top:0;
      left:0;
    }

    &:last-child{
      top:0;
      right: 0;
    }
  }

  button::before {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: var(--bg-dark);
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;
    font-weight: bold;
    inset: 0;
    margin: auto;
    opacity: 0;

    transition: transform 1000ms 200ms, opacity 200ms;
  }

  button:active::before {
    transform: scale(30);
    opacity: 1;
    transition: transform 1000ms, opacity 500ms;
  }

  button:has(:first-child:active)::before {
    margin: unset;
  }

  button:has(:last-child:active)::before {
    margin: unset;
    right: 0;
    left: unset;
    bottom: 0;
    top: unset;
  }

  button:has(:first-child:active)::before,
  button:has(:last-child:active)::before {
    transition: transform 500ms, opacity 250ms;
  }
</style>
