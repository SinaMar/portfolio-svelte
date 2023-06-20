<script lang="ts">
    export let type: 'button' | 'reset' | 'submit' = 'button'
</script>

<button {type}>
    <slot/>
</button>

<style lang="scss">
  *,
  *:before,
  *:after {
    transition: 0.3s ease-in-out;
  }

  *:before,
  *:after {
    z-index: -1;
  }
  button {
    display: block;
    position: relative;
    width: fit-content;
    border-radius: 0.375rem 1.25rem;
    padding: 0.625rem 2.75rem;
    font-size: 1rem;
    cursor: pointer;

    overflow: hidden;
    color: white;
    border: 1px solid transparent;
    background: var(--accent-color);
  }

  button:before {
    content: '';
    position: absolute;

    top: 0;
    right: 0px;
    bottom: 0;
    left:  -30%;
    width: 130%;
    background: var(--accent-color);
    transform: skew(30deg) translateX(0);
  }

  button:after {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 120%;
    position: absolute;
    background: var(--bg-dark);

    transform: skew(30deg) translateX(-110%);
  }

  button:hover {
    position: relative;
    transform: translateY(-10%);
    background: transparent;
    border-color: var(--accent-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:after {
      transform: skew(30deg) translateX(-10%);
    }
    &:before {
      transform: skew(30deg) translateX(100%);
    }
    &:active {
      background-color: black;
      top: 1px;
    }
  }
</style>