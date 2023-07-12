<script lang="ts">
    import SectionHeader from "./components/section/Section.svelte";
    import About from "./sections/About.svelte";
    import Skills from "./sections/SkillsSection.svelte";
    import Projects from "./components/projects/ProjectsSection.svelte";
    import ContactSection from "./sections/ContactSection.svelte";
    import InterestsSection from "./sections/InterestsSection.svelte";
    import {OBLIQUE_DEGREE} from "./data/config";
    import NavBar from "./components/navigation/NavBar.svelte";
    import BurgerMenu from "./components/navigation/BurgerMenu.svelte";

    let navItems = ['Skills', 'Projects','Interests', 'Contact'];
</script>

<main style="--oblique-deg: {OBLIQUE_DEGREE}deg; --oblique-deg-mirror: -{OBLIQUE_DEGREE}deg;" >

    <NavBar {navItems} class="desktop"/>
    <BurgerMenu {navItems}  class="mobile"/>
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

  @media screen and (min-width: 613px) {
    main :global(.desktop) {
      display: block;
    }

    main :global(.mobile) {
      display: none !important;
    }
  }

  @media screen and (max-width: 612px) {
    main :global(.desktop) {
      display: none !important;
    }

    main :global(.mobile)  {
      display: block;
    }
  }

</style>
