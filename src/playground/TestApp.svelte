<script lang="ts">

</script>

<button>
    <span></span>
    Click Me
    <span></span>
</button>

<style lang='scss'>

    button {
      margin: 2rem;
      //padding: 0.75em 3em;
      background: hsl(155, 73%, 33% );
      border: 0.1em solid hsl(155, 73%, 43% );
      //border-radius: 100vw;
      border-radius: 0.375rem 1.25rem;
      padding: 0.625rem 2.75rem;
      position: relative;
      transition: background-color 250ms;
      cursor: pointer;
      isolation: isolate;
      overflow: hidden;
    }

    button:hover,
    button:focus-visible {
      background: hsl(155, 73%, 43% );;

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
      inset: 0;
      margin: auto;
      transition: transform 300ms;
      opacity: 0;
    }

    button:active::before {
      transform: scale(30);
      opacity: 1;
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
</style>
