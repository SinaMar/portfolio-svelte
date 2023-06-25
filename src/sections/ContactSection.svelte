<script lang="ts">
    import {onMount} from "svelte";
    import CTAButton from "../lib/CTAButton.svelte";

    export let name;

    let contact: HTMLDivElement;

    let triangleHeight = "30";

    let innerWidth = window.innerWidth;
    let svg;

    let contactHeight;
    const setTriangleWidth = () => {
        if (svg)
            svg.setAttribute("width", svg.parentElement.clientWidth + "px");
    };

    onMount(() => {
        setTriangleWidth();
        contactHeight = contact.offsetHeight;
        console.log("contact height", contactHeight);
    });

    const onResize = (event) => {
        setTriangleWidth();
        innerWidth = window.innerWidth;
    };

    const mockSendEmail = (event) => {
    };
</script>

<svelte:window on:resize={onResize}/>
<section id={name}></section>
<div class="section-heading">
    <h1>
        {name}
    </h1>
</div>

<div class="contact" bind:this={contact}>
    <div class="contact-info">
        <p>Let’s Talk</p>
        <p>mail@sinamartens.com</p>
    </div>
    <div class="contact-form">
        <form on:submit={mockSendEmail}>
            <div class='form-content'>
                <label for="name">
                    Name
                </label>
                <input type="text" name="name" id="name" required/>

                <label for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" required/>
                <label for='message'>
                    Message
                </label>
                <textarea name="message" id="message" required rows="10"> </textarea>
                <CTAButton type="submit">Send Message</CTAButton>

            </div>

        </form>
    </div>
</div>

<div
        class="section-body-container"
        style={`transform: translateY(-${contactHeight / 2}px)`}
>
    <svg height={triangleHeight} class="triangle" bind:this={svg}>
        <polygon fill="#21242C" points={`0,0 ${innerWidth},${triangleHeight} 0,${triangleHeight}`}/>
    </svg>
    <div class="section-body" style={`height: ${contactHeight / 2 + 100}px`}></div>
</div>

<style lang="scss">
  .contact {
    position: relative;
    width: 60%;
    margin: auto;

    margin-top: 2rem;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .contact-info {
    background-color: var(--accent-color);
    //height: 300px;
    width: 40%;
    transform: translateX(10%);
    z-index: 1;
    background: linear-gradient(93.18deg, #35A770 0%, #2A9964 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    p:nth-child(1) {
      font-family: var(--font-heading);
      font-size: 2rem;
      margin-bottom: 10rem;
    }
  }

  .contact-form {
    background-color: var(--bg-dark);
    width: 80%;
    transform: skewY(-2deg);
    display: flex;
    padding: 8rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

    justify-content: center;

    .form-content {
      transform: skewY(2deg);
      //display: flex;
      text-align: left;
      flex-direction: column;
      align-items: flex-start;
      //min-width: 400px;
    }

    form {
      //display: flex;
      // transform: skewY(4deg);


      input {
        margin-bottom: 1rem;
        width: 100%;
        height: 2rem;
        border: none;
        resize: none;
        overflow: auto;
        outline: none;
        background-color: #2A2F39;
        box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
      }

      textarea {
        border: none;
        resize: none;
        overflow: auto;
        outline: none;
        width: 100%;
        background-color: #2A2F39;
        box-shadow: inset 0px -1px 1px rgba(255, 255, 255, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
        color: var(--text);
        margin-bottom: 1rem;
      }

    }

    label {
      color: var(--text);
      margin-bottom: 0.25rem;
    }
  }

  .section-body-container {
    // transform: translateY(-150px);
    z-index: -10;
  }

  section  {
    scroll-margin-top: 8rem;
  }


  .section-heading {
    margin-top: 6rem;
    height: 30px;
    background: #21242c;
    transform: rotateZ(-2deg);

    h1 {
      font-family: var(--font-heading);
      position: absolute;
      text-align: left;
      bottom: 20px;
      margin: 0;
      transform: rotateZ(2deg);
      right: 20%;
    }
  }

  .triangle {
    position: relative;
    top: 8px;
    transform: scale(-1, 1);
  }

  .section-body {
    background: var(--bg-dark);
    color: white;
    z-index: -10;
  }
</style>
