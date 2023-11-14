import { useForm } from '../../hooks/useForm/useForm'
import "./contactForm.css";

function ContactForm() {
  const initialState = {
    email: "",
    subject: "",
    body: "",
  };

  const { onChange, onSubmit, values } = useForm(
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
          onChange={onChange}
          required
        />
        <input
          name="subject"
          id="subject"
          type='text'
          placeholder="Subject"
          onChange={onChange}
          required
        />
        <input
          name="body"
          id="body"
          type='text'
          placeholder="Body"
          onChange={onChange}
          required
        />
      </div>
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;
