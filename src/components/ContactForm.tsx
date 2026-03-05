import { useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  emailValidate,
  messageValidate,
  nameValidate,
} from "../validations/contactFormValidations";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const serviceKey = import.meta.env.PUBLIC_SERVICE_KEY;
const templateKey = import.meta.env.PUBLIC_TEMPLATE_KEY;
const publicKey = import.meta.env.PUBLIC_KEY;

function ContactForm() {
  const submitBtnRef = useRef();
  const [formStatus, setFormStatus] = useState("");

  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();

  const [formData, formDataDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "name":
          return {
            ...state,
            name: action.value,
            nameError: action.err,
          };
        case "email":
          return {
            ...state,
            email: action.value,
            emailError: action.err,
          };
        case "message":
          return {
            ...state,
            message: action.value,
            messageError: action.err,
          };
        case "reset":
          return {
            name: "",
            nameError: "",
            email: "",
            emailError: "",
            message: "",
            messageError: "",
          };
        case _:
          return state;
      }
    },
    {
      name: "",
      nameError: null,
      email: "",
      emailError: null,
      message: "",
      messageError: null,
    },
  );

  const handleChangeNameInput = (e) => {
    const val = e.target.value;
    let error = nameValidate(val);

    formDataDispatch({ type: "name", value: val, err: error });
  };

  const handleChangeEmailInput = (e) => {
    const val = e.target.value;
    let error = emailValidate(val);

    formDataDispatch({ type: "email", value: val, err: error });
  };

  const handleChangeMessageTextArea = (e) => {
    const val = e.target.value;
    let error = messageValidate(val);

    formDataDispatch({ type: "message", value: val, err: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: dateTimeFormat.format(new Date()),
    };

    if (
      formData.nameError !== null ||
      formData.messageError !== null ||
      formData.messageError !== null
    ) {
      setFormStatus("Please fill the contact form properly.");
      return;
    }

    // Send
    emailjs
      .send(serviceKey, templateKey, dataSend, {
        publicKey: publicKey,
      })
      .then(() => {
        formDataDispatch({ type: "reset" });
        setFormStatus(
          "Success! I'll get back to you within 2-3 business days!",
        );
      })
      .catch((err) => {
        setFormStatus(
          "There's an error while sending the message. Please try again!",
        );
        console.log(err);
      });
  };

  return (
    <form className="flex flex-col gap-2">
      <label>
        Name{" "}
        {formData.nameError && (
          <span className="text-sky-300 bg-slate-900 font-bold w-fit px-1 rounded-sm shadow-sm">
            {formData.nameError}
          </span>
        )}
      </label>
      <input
        className="w-full min-h-12 p-1 bg-slate-900 rounded-md"
        type="text"
        name="name"
        placeholder="Name"
        ref={nameField}
        value={formData.name}
        onChange={handleChangeNameInput}
      />

      <label>
        Email{" "}
        {formData.emailError && (
          <span className="text-sky-300 bg-slate-900 font-bold w-fit px-1 rounded-sm shadow-sm">
            {formData.emailError}
          </span>
        )}
      </label>
      <input
        className="w-full min-h-12 p-1 bg-slate-900 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        ref={emailField}
        value={formData.email}
        onChange={handleChangeEmailInput}
      />

      <label>
        Message{" "}
        {formData.messageError && (
          <span className="text-sky-300 bg-slate-900 font-bold w-fit px-1 rounded-sm shadow-sm">
            {formData.messageError}
          </span>
        )}
      </label>
      <textarea
        className="w-full min-h-52 p-1 bg-slate-900 rounded-md"
        name="message"
        placeholder="Message"
        ref={messageField}
        value={formData.message}
        onChange={handleChangeMessageTextArea}
      ></textarea>
      {formStatus.length !== 0 && (
        <span className="bg-slate-900 font-bold w-fit px-1 mx-auto rounded-sm shadow-sm">
          {formStatus}
        </span>
      )}
      <button
        className="bg-slate-900 rounded-md p-2 scale-100 hover:scale-101 active:scale-99 transition-[scale] disabled:opacity-50"
        ref={submitBtnRef}
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
