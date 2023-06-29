import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormInput,
  FormLabel,
  FormTextarea,
  FormBtn,
} from "./ContactForm.styled";

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
      <FormLabel>Name</FormLabel>
      <FormInput type="text" name="user_name" />
      <FormLabel>Email</FormLabel>
      <FormInput type="email" name="user_email" />
      <FormLabel>Message</FormLabel>
      <FormTextarea name="message" />
      <FormBtn type="submit" value="Send" />
    </Form>
  );
};
