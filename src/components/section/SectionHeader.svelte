<script lang="ts">
    export let name;
    export let mirror = false;
    export let obliqueTopHeight = 0;

</script>

<header>
    <div class="section-header-line"  style="--section-header-translate: {obliqueTopHeight / 2}px" class:mirror>
        <h1 class:mirror> {name} </h1>
    </div>
</header>

<style lang='scss'>

  p {
    color: var(--tc);
  }

  .section-header-line {
    margin-top: 6rem;
    height: 2rem;
    transform: rotateZ(var(--oblique-deg)) translateY(var(--section-header-translate))  ;
    border-top: 1.3rem solid transparent;
    border-bottom: 1.3rem solid transparent;
    border-image: url('/assets/border1.svg') 10 stretch;
    &.mirror {
      transform: rotateZ(var(--oblique-deg-mirror)) translateY(var(--section-header-translate))  ;
    }
  }

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