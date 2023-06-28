import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "./ContactForm.styled";

export const ContactForm = () => {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rnmr2p8",
        "template_sidtxro",
        form.current,
        "M_K-bPQaxmIooKAFt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </Form>
  );
};
