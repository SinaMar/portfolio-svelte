<script lang="ts">
    import SectionHeader from "./components/section/Section.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import About from "./sections/About.svelte";
    import Skills from "./sections/SkillsSection.svelte";
    import Projects from "./components/projects/ProjectsSection.svelte";
    import ContactSection from "./sections/ContactSection.svelte";
    import InterestsSection from "./sections/InterestsSection.svelte";
</script>

<main>

    <NavBar/>
    <About/>
    <SectionHeader name="Skills">
        <Skills/>
    </SectionHeader>
    <SectionHeader name="Projects" mirror>
        <Projects/>
    </SectionHeader>
    <SectionHeader name="Interests" >
        <InterestsSection/>
    </SectionHeader>

    <ContactSection name='Contact'/>
</main>

<style lang="scss">
  main {
    //position: relative;
  }
</style>
