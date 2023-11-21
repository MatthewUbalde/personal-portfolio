// import { useState } from "react";
import EmailJS, { EmailJSResponseStatus } from "@emailjs/browser";
import ReCAPTCHA from 'react-google-recaptcha'

import { ReactNode, useState } from "react";
import { useForm } from "../../hooks/useForm/useContactForm";
import "./contactForm.css";

const emailjsServiceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateID: string = import.meta.env.VITE_EMAILJS_RECEIVE_TEMPLATE_ID;
const emailjsKey: string = import.meta.env.VITE_EMAILJS_KEY;
const recaptchaKey: string = import.meta.env.VITE_RECAPTHA_KEY;


function ContactFormStatus(state: FormState): ReactNode {
  let msg: string = '';

  switch (state) {
    case 'submitted':
      msg = "Email sent! I'll get back to you within 3 days. Have a great day!";
      break;
    case 'error' :
      msg = "Error. Unable to send email. My apologies";
      break;
    case 'no-recaptcha': 
      msg = "Please be sure to complete the Recaptcha first!";
      break;
    default:
      return <></>;
      break;
  }

  return <p className='status'>{msg}</p>;
}

function ContactForm() {
  const [formState, setFormState] = useState<FormState>('unknown');
  const [recaptchaResponse, setRecaptchaResponse] = useState("");

  const initialState: ContactFormData = {
    'from-name': "",
    'email': "",
    'message': "",
    'g-recaptcha-response': ""
  };

  const { onInputChange, onTextareaChange, onSubmit, clearValues, values } = useForm(
    sendEmailCallback,
    recaptchaResponse,
    initialState
  );

  async function sendEmailCallback() {
    EmailJS.send(
      emailjsServiceID,
      emailjsTemplateID,
      values,
      emailjsKey
    ).then(
      (result: EmailJSResponseStatus) => { // Successful!
        console.log(result.text);
        setFormState('submitted');
        clearValues();
      },
      (error: EmailJSResponseStatus) => { // Unsuccessful
        console.log(error.text);

        if (error.text.startsWith('reCAPTCHA')) { 
          setFormState('no-recaptcha');
        }
        else {
          setFormState('error');
        }
      }
    );
  }

  return (
    <form id="contact" className='contact-form' onSubmit={onSubmit}>
      {ContactFormStatus(formState)}
      <div className="field-container">
        <input
          name="from-name"
          id="from-name"
          value={values["from-name"]}
          type="text"
          placeholder="Name"
          onChange={onInputChange}
          required
        />
        <input
          name="email"
          id="email"
          value={values["email"]}
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          required
        />
        <textarea
          name="message"
          id="message"
          value={values["message"]}
          placeholder="Message"
          onChange={onTextareaChange}
          required
        />
      </div>
      <ReCAPTCHA
        sitekey={recaptchaKey}
        onChange={(value: string) => {setRecaptchaResponse(value);}}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
