<script lang="ts">

</script>

<h1 >
    <slot/>
</h1>



<style lang='scss'>

  h1 {
    font-family: var(--font-heading);
    position: absolute;
    text-align: left;
    margin: 0;
    transform: rotateZ(var(--oblique-deg-mirror));
    left: 20%;
    bottom: 0.5rem;

    &.mirror {
      left: unset;
      right: 20%;
      transform: rotateZ(var(--oblique-deg));
    }
  }

</style>
