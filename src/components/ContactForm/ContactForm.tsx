import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormInput,
  FormLabel,
  FormTextarea,
  FormBtn,
} from "./ContactForm.styled";

declare var process: {
  env: {
    REACT_APP_SERVICE_ID: string;
    REACT_APP_TEMPLATE_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

export const ContactForm = () => {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
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
