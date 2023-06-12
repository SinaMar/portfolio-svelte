<script lang="ts">
import Portrait from '../assets/Portrait.png'
import HandWaveIcon from '../assets/handwave.svg'
</script>


<section id="About">
<div class="about-container">
    <div class="about">
        <div>
            <h2>Hey there,<img src={HandWaveIcon}  alt="Logo" class="handwave" /></h2>

            <h1>I’m <span>Sina</span></h1>
            <h1 class="backline">Frontend Developer</h1>
            <p>I'm a dedicated Frontend Developer crafting outstanding websites. I stay updated with the latest trends and
                blend functionality with aesthetics for seamless user experiences. Collaboration is key to my process,
                bringing diverse perspectives for exceptional digital solutions. Let's build user-friendly websites
                together that leave a lasting impression!</p>
            <div>
        </div>
            <div class="buttons">
                <button type="button" class="primary">Download CV</button>
                <button type="button" class="secondary">See Project</button>
            </div>
        </div>
    </div>
        <img src={Portrait}  alt="Logo" height="280px"/>
</div>
</section>


<style lang="scss">

  .handwave {
    display: inline;
    padding: 1rem;
  }

  .buttons {
    margin-top: 4rem;
    text-align: right;
  }

  button {
    border: none;
    border-radius: 0.375rem 1.25rem;
    padding: 0.625rem 2.75rem;
    font-size: 1rem;
    margin-left: 0.25rem;
    cursor:pointer;
  }

  .primary {
    background: linear-gradient(93.18deg, #35A770 0%, #25865e 100%);
  }
  .secondary {
    border: 1px solid;
    background-color: transparent;
    border-color: var(--accent-color);
    color: var(--accent-color);

  }

  button.primary:hover {
    background: transparent;
    border: 1px solid ;
    border-color: var(--accent-color);
  }
  button.secondary:hover {
    background: linear-gradient(93.18deg, #35A770 0%, #25865e 100%);
    color: white;
  }

  img {
    //padding-left: 4rem;
    //margin-left: 220px;
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
    //margin-bottom: 1rem;
    display: flex;
    align-items: center;

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
    left: 20%;
  }

    .about-container {
      column-gap: 12.5rem;
      margin: auto;
      margin-top: 6rem;
      margin-bottom: 20rem;
        display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      flex-wrap: wrap-reverse;

      .about {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 31.25rem;
        p {
          font-size: 1.25rem;
          margin-top: 2rem;
          //max-width: 400px;
          text-align: left;
          color: #A6B1C8;

        }
      }
    }
</style>