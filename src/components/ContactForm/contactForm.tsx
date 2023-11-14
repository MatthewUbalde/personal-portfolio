import { useForm } from '../../hooks/useForm/useForm'
import "./contactForm.css";

function ContactForm() {
  const initialState = {
    email: "",
    subject: "",
    body: "",
  };

  const { onInputChange, onTextareaChange, onSubmit, values } = useForm(
    sendEmailCallback,
    initialState
  );

  async function sendEmailCallback() {
    console.log(values)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-container">
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onInputChange}
          required
        />
        <input
          name="subject"
          id="subject"
          type='text'
          placeholder="Subject"
          onChange={onInputChange}
          required
        />
        <textarea
          name="body"
          id="body"
          placeholder="Body"
          onChange={onTextareaChange}
          required
        />
      </div>
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;
