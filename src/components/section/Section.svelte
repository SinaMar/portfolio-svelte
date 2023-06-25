<script lang="ts">
    import deco from '../../assets/deco2.svg';
    import SectionHeader from "./SectionHeader.svelte";

    export let name;
    export let mirror = false;

</script>

<section id={name} class:first={name==='Skills'}></section>
<SectionHeader {name} {mirror}/>


<div class="section-body"  >
    <slot/>
</div>
<!--<img src={deco} alt="" class="deco body-bottom"  class:mirror >-->
<div class="body-bottom2" ></div>

<style lang="scss">
  section {
    scroll-margin-top: 2rem;
    &.first {
      scroll-margin-top: 2rem;
    }
  }

  .deco{
    width: 100%;

    &.body-bottom {
      transform: scale(-1,-1);
      margin-bottom: 16rem;
      &.mirror {
        transform: scale(1,-1);
      }
    }
  }

  .body-bottom2 {
    border-bottom: 1.3rem solid transparent;
    border-image: url('/assets/border-dark.svg') 10 stretch;
    width: 100%;
    margin-bottom: 16rem;
  }


  .section-body {
    //padding: 1rem;


    background: var(--bg-dark);
    color: white;
  }
</style>
