import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    const mobileNumber = form.current.user_mobile.value;
    if (!validateMobileNumber(mobileNumber)) {
      setErrorMessage('Please enter a valid mobile number.');
      return;
    }
    setErrorMessage('');

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_CONTACT_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Form Submitted Successfully!')
          setFormSubmitted(true)
          console.log('SUCCESS!')
        },
        (error) => {
          toast.error("Something went wrong")
          console.log('FAILED...', error.text);
        }
      );
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobileNumber);
  };

  return (
    <div className='contact-form'>
      <img src="/images/contact.jpg" alt="" />
      <form class="form" ref={form} onSubmit={sendEmail}>
        <p class="title">Contact Form</p>
        <p class="message">let's connect and create together</p>
        <div class="flex">
          <label>
            <input class="input" type="text" name="user_first_name" placeholder="" required />
            <span>Firstname</span>
          </label>
          <label>
            <input class="input" type="text" name="user_last_name" placeholder="" required />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input class="input" type="tel" name="user_mobile" placeholder="" required />
          <span>Mobile</span>
        </label>
        <label>
          <input class="input" type="email" name="user_email" placeholder="" required />
          <span>Email</span>
        </label>
        <label>
          <textarea name="message" class="input" type="email"  placeholder="" required />
          <span>Enter your message here</span>
        </label>
        <button class={`submit ${formSubmitted ? 'cf-disabled' : ''}`} value="Send" disabled={formSubmitted}>Submit</button>
        <Toaster
        position="bottom-center"
        reverseOrder={false}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm
