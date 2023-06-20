<script>

import emailjs from '@emailjs/browser';



  const TEMPLATE_ID = 'template_mcbk346';
  const PUBLIC_KEY = 'ZLFXtekWZsR8V3pgM';
  const SERVICE_ID = 'service_vd55n63';

  emailjs.init(PUBLIC_KEY);

  function sendEmail(event) {

    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    let templateParams = {
        name, 
        email,
        message
    }

    console.log(message);

    // emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    //         .then(function(response) {
    //           console.log('SUCCESS!', response.status, response.text);
    //         }, function(error) {
    //           console.log('FAILED...', error);
    //         });
    //
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   name,
    //   email,
    //   text
    // }, 'YOUR_USER_ID')
    //         .then(() => {
    //           alert('Email sent successfully');
    //         })
    //         .catch(error => {
    //           console.error('Error sending email:', error);
    //           alert('Error sending email');
    //         });






  }

  const mockSendEmail = (event) => {

  }

</script>

<div class="contact">

</div>
<!-- <div class="bg">

</div> -->



<form on:submit={mockSendEmail}>
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Send Message</button>
</form>


<style lang="scss">

.bg {
    background-color: var(--bg-dark);
    width: 100%;
    height: 300px;
  }

  .contact {
    position: relative;
    // transform: translateY(50%);
    z-index: 1;
    background-color: var(--accent-color);
    width: 70%;
    height: 300px;
    margin: auto;

    // margin-top: -200px;

  }
</style>