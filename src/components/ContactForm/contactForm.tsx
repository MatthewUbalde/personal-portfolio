// import { useState } from "react";
import EmailJS from "@emailjs/browser";
import ReCAPTCHA from 'react-google-recaptcha'

import { useState } from "react";
import { useForm } from "../../hooks/useForm/useForm";
import "./contactForm.css";

const emailjsServiceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateID: string = import.meta.env.VITE_EMAILJS_RECEIVE_TEMPLATE_ID;
const emailjsKey: string = import.meta.env.VITE_EMAILJS_KEY;
const recaptchaKey: string = import.meta.env.VITE_RECAPTHA_KEY;

function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState();

  const initialState = {
    from_name: "",
    email: "",
    message: "",
  };

  const { onInputChange, onTextareaChange, onSubmit, values } = useForm(
    sendEmailCallback,
    recaptchaResponse,
    initialState
  );

  function recaptchaOnChange(value: any) {
    setRecaptchaResponse(value);
  }

  async function sendEmailCallback() {
    EmailJS.send(
      emailjsServiceID,
      emailjsTemplateID,
      values,
      emailjsKey
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setEmailSent(true);
  }

  return (
    <form id="contact" className='contact-form' onSubmit={onSubmit}>
      {emailSent && <p>Email has been sent! Will respond in 3 days!</p>}
      <div className="field-container">
        <input
          name="from_name"
          id="from_name"
          type="text"
          placeholder="Name"
          onChange={onInputChange}
          required
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          onChange={onTextareaChange}
          required
        />
      </div>
      <ReCAPTCHA
        sitekey={recaptchaKey}
        onChange={recaptchaOnChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
