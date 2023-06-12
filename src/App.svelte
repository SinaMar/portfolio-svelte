<script lang="ts">
  import FontTest from './lib/FontTest.svelte'
  import Font2 from "./lib/Font2.svelte";
  import SectionHeader from "./lib/SectionHeader.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import CssTest from "./lib/CssTest.svelte";
  import About from "./sections/About.svelte";
</script>

<main>

  <NavBar/>
  <About/>
  <SectionHeader name="Skills"/>
  <SectionHeader name="Projects"/>
  <SectionHeader name="Interests"/>
  <SectionHeader name="Contact"/>
</main>

<style lang="scss">
 main {
   position: relative;
 }
</style>
