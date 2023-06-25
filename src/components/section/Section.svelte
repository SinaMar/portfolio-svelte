<script lang="ts">
    import SectionHeader from "./SectionHeader.svelte";
    export let name;
    export let mirror = false;

</script>

<section id={name} class:first={name==='Skills'}></section>
<SectionHeader {name} {mirror}/>


<div class="section-body" >
    <slot/>
</div>
<div class="body-border-bottom"></div>

<style lang="scss">

  section {
    scroll-margin-top: 2rem;
    &.first {
      scroll-margin-top: 2rem;
    }
  }

  .section-body {
    background: var(--bg-dark);
  }

  .body-border-bottom {
    border-bottom: 1.3rem solid transparent;
    border-image: url('/assets/border-dark.svg') 10 stretch;
    width: 100%;
    margin-bottom: 16rem;
  }
</style>
