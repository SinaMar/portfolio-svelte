<script lang="ts">
    import Portrait from '../assets/Portrait.png'
    import HandWaveIcon from '../assets/icons/handwave.svg'
    import PrimaryButton from "../lib/PrimaryButton.svelte";
</script>


<section id="About">
</section>

<div class="about-container">
    <div class="about">
        <div>
            <h2>Hey there,<img src={HandWaveIcon} alt="HandWave Icon"  class="handWaveIcon"/></h2>
            <h1>I’m <span>Sina</span></h1>
            <h1 class="backline">Frontend Developer</h1>
            <p>I'm a dedicated Frontend Developer crafting outstanding websites. I stay updated with the latest
                trends and
                blend functionality with aesthetics for seamless user experiences. Collaboration is key to my
                process,
                bringing diverse perspectives for exceptional digital solutions. Let's build user-friendly websites
                together that leave a lasting impression!
            </p>
            <div class="buttons">
                <!--                    <button class="primary">Download CV</button>-->
<!--                <a class="btn primary">Download CV</a>-->
                <PrimaryButton> Download CV </PrimaryButton>
                <PrimaryButton secondary> See Projects</PrimaryButton>
<!--                <a class="btn secondary" href="#Projects">See Project</a>-->
                <!--                    <button class="secondary">See Project</button>-->
            </div>
        </div>
    </div>
    <img src={Portrait} alt="Logo"  class="portrait"/>
</div>


<style lang="scss">

  .handWaveIcon {
  width: 5rem;
  }

  .portrait {
    //height: 25rem;
    max-width: 100vw;
  }

  .about-container {
    column-gap: 12.5rem;
    margin: auto;
    //margin-top: 6rem;
    //height: calc(100vh - 4rem);
    //margin-bottom: 20rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap-reverse;

    .about {
      display: flex;
      flex-direction: column;
      position: relative;
      max-width: 31.25rem;

      p {
        font-size: 1.25rem;
        margin-top: 2rem;
        //max-width: 400px;
        text-align: left;
        color: #A6B1C8;

      }
    }
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 3rem;
    margin: 0;
    text-align: left;
    position: relative;

    span {
      font-family: var(--font-heading);
      color: var(--accent-color)
    }
  }

  h2 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin: 0;
    text-align: left;
    display: flex;
    align-items: center;

    img {
      display: inline;
      padding: 1rem;
    }
  }

  .backline::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 85%;
    height: 70%;
    transform: skew(0deg) translateY(30%);
    background: var(--bg-dark);
    z-index: -1;
    left: 0.5rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 4rem;
    text-align: right;
    justify-content: right;
  }

  *:before,
  *:after {
    transition: 0.3s ease-in-out;
  }

  *:before,
  *:after {
    z-index: -1;
  }

  .btn {
    display: block;
    position: relative;
    width: fit-content;
    border-radius: 0.375rem 1.25rem;
    padding: 0.625rem 2.75rem;
    font-size: 1rem;
    cursor: pointer;

    overflow: hidden;


    &.primary {
      color: white;
      border: 1px solid transparent;
      background: var(--accent-color);
    }

    &.secondary {
      text-decoration: none;
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
    }
    &.primary:before {
      content: '';
      position: absolute;

      top: 0;
      right: 0px;
      bottom: 0;
      left:  -30%;
      width: 130%;
      background: var(--accent-color);
      //background: yellow;
      transform: skew(30deg) translateX(0);
      //transition: transform 0.5s ease-in-out;

    }
    &.primary:after {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 120%;
      position: absolute;
      background: var(--bg-dark);

      transform: skew(30deg) translateX(-110%);
      //transition: transform 0.5s ease-in-out;
    }



    &.secondary:after {
      content: '';
      top: 0;
      right: -50px;
      bottom: 0;
      left: 0;
      width: 120%;
      position: absolute;
      border-right: 50px solid transparent;
      //border-bottom: 50px solid var(--accent-color);
      border-bottom: 50px solid var(--bg-dark);
      transform: translateX(-100%);
    }


    &:hover {

      &.primary {
        position: relative;
        transform: translateY(-10%);
        //transition: transform 0.5s ease-in-out;
        background: transparent;
        border-color: var(--accent-color);
        //border-color: white;
        // color: var(--accent-color);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

      &.secondary {
        color: white;
      }

      &:after {
        transform: skew(30deg) translateX(-10%);
        //transition: transform 0.5s ease-in-out;

      }

      &:before {
        transform: skew(30deg) translateX(100%);
        //transition: transform 0.5s ease-in-out;


      }
    }



    &:active {
      //transform: translateY(30%);
      background-color: black;
      top: 1px;
    }

  }

  button {
    //border: none;
    border-radius: 0.375rem 1.25rem;
    padding: 0.625rem 2.75rem;
    font-size: 1rem;
    margin-left: 0.25rem;
    cursor: pointer;
    border: 1px solid transparent;

    &.primary {
      background: linear-gradient(93.18deg, #35A770 0%, #25865e 100%);
      //background: green;


    }

    //
    //&.primary:hover {
    //  background: transparent;
    //  border: 1px solid;
    //  //background: linear-gradient(93.18deg, #fff 0%, #25865e 100%);
    //
    //  border-color: var(--accent-color);
    //}

    &.secondary {
      border: 1px solid;
      background-color: transparent;
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    &.secondary:hover {
      background: linear-gradient(93.18deg, #35A770 0%, #25865e 100%);
      color: white;
    }
  }

</style>