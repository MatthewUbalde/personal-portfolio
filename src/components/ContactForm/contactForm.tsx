import EmailJS from "@emailjs/browser";
import { emailjsKey, serviceId, receiveTemplateId } from "../../secret/secret";

import { useForm } from "../../hooks/useForm/useForm";
import "./contactForm.css";

function ContactForm() {
  const initialState = {
    from_name: "",
    email: "",
    message: "",
  };

  const { onInputChange, onTextareaChange, onSubmit, values } = useForm(
    sendEmailCallback,
    initialState
  );

  async function sendEmailCallback() {
    console.log(values);

    EmailJS.send(
      serviceId,
      receiveTemplateId,
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
  }

  return (
    <form id="contact" className='contact-form' onSubmit={onSubmit}>
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
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
