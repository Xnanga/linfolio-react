import emailjs from "emailjs-com";
import { useState } from "react";
import ModalButton from "../Modals/ModalUI/ModalButton";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [failedSubmission, setFailedSubmission] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const fieldIsValid = (fieldData, isEmail = false) => {
    if (isEmail) {
      if (isValidEmail(fieldData)) return styles["validated"];
    } else if (fieldData) return styles["validated"];
  };

  const submit = () => {
    if (name && email && subject && message) {
      const serviceId = "service_bpchnol";
      const templateId = "template_tuu3grh";
      const userId = "user_gmcSavYEiA9uayLKCzDxu";
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      if (isValidEmail(email) === false) {
        setFailedSubmission(false);
        return;
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((error) => console.log(error));

      setname("");
      setEmail("");
      setSubject("");
      setMessage("");
      setEmailSent(true);
      setFailedSubmission(false);
    } else {
      setFailedSubmission(true);
    }
  };

  return (
    <form
      className={styles["contact-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Your Name"
        className={`${styles["contact-form__name"]} ${fieldIsValid(name)}`}
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email Address"
        className={`${styles["contact-form__email"]} ${fieldIsValid(
          email,
          true
        )}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject Line"
        className={`${styles["contact-form__subject"]} ${fieldIsValid(
          subject
        )}`}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        className={`${styles["contact-form__message"]} ${fieldIsValid(
          message
        )}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <ModalButton
        id="sendEmail"
        buttonText="Send Message"
        buttonAction={submit}
      />
      <span
        className={
          emailSent || failedSubmission
            ? `${styles["contact-form__notification"]}`
            : `${styles["contact-form__notification--hidden"]}`
        }
      >
        {`${
          failedSubmission
            ? "Looks like something went wrong... Please double-check all fields are filled in before sending."
            : ""
        }`}
        {`${
          emailSent
            ? "Success! Thanks for your message - I'll get back to you soon."
            : ""
        }`}
      </span>
    </form>
  );
};

export default ContactForm;
