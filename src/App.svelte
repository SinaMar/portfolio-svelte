<script lang="ts">
  import SectionHeader from "./lib/SectionHeader.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import About from "./sections/About.svelte";
  import Skills from "./sections/Skills.svelte";
  import CssTest from "./lib/CssTest.svelte";
</script>

<main>

  <NavBar/>
  <About/>
  <SectionHeader name="Skills">
    <Skills/>
  </SectionHeader>




<!--  <SectionHeader name="Projects"/>-->
<!--  <SectionHeader name="Interests"/>-->
<!--  <SectionHeader name="Contact"/>-->
</main>

<style lang="scss">
 main {
   //position: relative;
 }
</style>
