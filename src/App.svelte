<script lang="ts">
    import SectionHeader from "./lib/SectionHeader.svelte";
    import NavBar from "./lib/NavBar.svelte";
    import About from "./sections/About.svelte";
    import Skills from "./sections/Skills.svelte";
    import CssTest from "./lib/Carousel.svelte";
    import Projects from "./components/projects/ProjectsSection.svelte";
    import Test from "./lib/Carousel.svelte";
    import Test1 from "./lib/Test1.svelte";
    import Test2 from "./lib/Test2.svelte";
</script>

<main>

    <NavBar/>
    <About/>
    <SectionHeader name="Skills">
        <Skills/>
    </SectionHeader>
    <SectionHeader name="Projects" mirrored>
        <Projects/>
    </SectionHeader>
    <SectionHeader name="Interests">
        <div>
            asperiores beatae consequatur dicta distinctio excepturi fugit illum, in iusto nisi possimus praesentium
            quas saepe sapiente, sit! Aliquid, amet architecto atque deserunt dolor, doloremque enim, error est eveniet
            hic modi repellat sequi voluptas! Adipisci asperiores corporis dignissimos eius ex explicabo fuga id illo
            illum ipsa, iure iusto maiores minus, neque nesciunt nulla porro quisquam recusandae rem suscipit unde velit
            voluptate! Commodi cum eveniet harum in ipsum magni nemo praesentium reprehenderit voluptate voluptatibus?
            Amet aperiam autem est necessitatibus, odio quaerat repudiandae sunt vitae voluptatem. Accusamus animi autem
            beatae consectetur, consequuntur cupiditate distinctio dolore dolorum ea earum enim est excepturi expedita
            explicabo harum illum laborum libero minus mollitia necessitatibus nemo nostrum numquam officia officiis
            pariatur possimus praesentium quia quidem quod quos sapiente tempora temporibus unde? Aperiam illum placeat
            quod quos vel. Atque, aut beatae commodi ducimus earum error explicabo ipsa ipsam iusto, maiores modi
            nesciunt nihil porro quod similique ullam unde. Aperiam consequuntur corporis, dignissimos explicabo fuga
            ipsam labore placeat quidem quis quod suscipit tenetur voluptate voluptatem! Exercitationem, laboriosam,
            molestias! A architecto assumenda at beatae blanditiis commodi cupiditate delectus distinctio dolor ducimus
            ea eaque esse eveniet excepturi expedita harum hic incidunt laboriosam laborum minus modi molestiae
            molestias natus nisi omnis optio, perferendis porro praesentium quas quibusdam quos repudiandae, sunt
            temporibus ut velit veritatis vitae. Amet aperiam asperiores aut consequuntur cum debitis eum exercitationem
            harum, maxime, nulla odio quaerat quam, qui sit veritatis. Est impedit modi necessitatibus neque, omnis
            perferendis quas saepe sequi. A blanditiis commodi corporis cumque deleniti, doloribus impedit minima,
            neque, pariatur repellat suscipit vero. Hic incidunt inventore sed tempore. Ad, alias eligendi est facere
            laborum nam nemo non officia quis quos reiciendis repudiandae saepe sint. A cum debitis, doloribus ex
            expedita hic id, nam nemo quas quia quo repudiandae vitae voluptate!
        </div>
    </SectionHeader>
    <SectionHeader name="Contact" mirrored>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto at blanditiis cupiditate
            deserunt dolore, error exercitationem labore laboriosam nemo nihil quibusdam quo recusandae sunt tenetur
            ullam unde. Blanditiis id molestiae nesciunt placeat voluptatibus. Accusantium, beatae deserunt, eius ex
            explicabo fugiat harum id minima odit perferendis perspiciatis porro praesentium rerum sapiente tempora
            ullam velit? Dicta doloremque esse eveniet fugiat, harum illum, mollitia nihil odio tempora veniam vero,
            voluptatum! Ab aperiam commodi consectetur delectus dignissimos, ea eligendi eveniet, fuga hic illum labore
            laboriosam minima minus neque quia quibusdam rem repellat tempore unde, voluptates. Architecto aspernatur
            dicta excepturi, possimus quas quia repudiandae!
        </div>
    </SectionHeader>


    <Test1/>
    <Test2/>
    


    <!--  <SectionHeader name="Projects"/>-->
    <!--  <SectionHeader name="Interests"/>-->
    <!--  <SectionHeader name="Contact"/>-->
</main>

<style lang="scss">
  main {
    //position: relative;
  }
</style>
