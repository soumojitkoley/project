import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const JobForm = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic email validation
    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    // Basic mobile number validation
    const mobileNumber = form.current.user_mobile.value;
    if (!validateMobileNumber(mobileNumber)) {
      setErrorMessage('Please enter a valid mobile number.');
      return;
    }

    // Reset error message
    setErrorMessage('');

    // Send email using emailjs
    emailjs
      .sendForm(import.meta.env.YOUR_SERVICE_ID, import.meta.env.YOUR_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    // Basic mobile number validation using regular expression
    const regex = /^[0-9]{10}$/;
    return regex.test(mobileNumber);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Mobile Number</label>
      <input type="tel" name="user_mobile" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default JobForm;
