import { useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const serviceKey = import.meta.env.SERVICE_KEY;
const templateKey = import.meta.TEMPLATE_KEY;
const publicKey = import.meta.PUBLIC_KEY;

function ContactForm() {
  const form = useRef();
  const nameField = useRef();
  const emailField = useRef();
  const messageField = useRef();

  const [data, dataDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "name":
          return {
            ...state,
            name: action.value,
          };
        case "email":
          return {
            ...state,
            email: action.value,
          };
        case "message":
          return {
            ...state,
            message: action.value,
          };
        case _:
          return state;
      }
    },
    {
      name: "",
      email: "",
      message: "",
    },
  );

  const handleChangeNameInput = (e) => {
    const val = e.target.value;
    dataDispatch({ type: "name", value: val });
  };

  const handleChangeEmailInput = (e) => {
    const val = e.target.value;
    dataDispatch({ type: "email", value: val });
  };

  const handleChangeMessageTextArea = (e) => {
    const val = e.target.value;
    dataDispatch({ type: "message", value: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataSend = {
      ...data,
      time: dateTimeFormat.format(new Date()),
    };

    // Send
    emailjs
      .send(serviceKey, templateKey, dataSend, {
        publicKey: publicKey,
      })
      .then(() => {
        console.log("SUCCESS");
      })
      .catch((err) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <form ref={form} className="flex flex-col gap-2">
      <label>Name</label>
      <input
        className="w-full min-h-12 p-1 bg-slate-900 rounded-md"
        type="text"
        name="name"
        placeholder="Name"
        ref={nameField}
        value={data.name}
        onChange={handleChangeNameInput}
      />
      <label>Email</label>
      <input
        className="w-full min-h-12 p-1 bg-slate-900 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        ref={emailField}
        value={data.email}
        onChange={handleChangeEmailInput}
      />
      <label>Message</label>
      <textarea
        className="w-full min-h-52 p-1 bg-slate-900 rounded-md"
        name="message"
        placeholder="Message"
        ref={messageField}
        value={data.message}
        onChange={handleChangeMessageTextArea}
      ></textarea>
      <button
        className="bg-slate-900 rounded-md p-2 pointer-events-auto scale-100 hover:scale-101 active:scale-99 transition-[scale]"
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
