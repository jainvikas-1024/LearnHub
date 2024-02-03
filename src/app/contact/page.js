"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const page = () => {
  const emailRef = useRef();
  const subjectRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        "service_2lx176f",
        "template_4bptx1d",
        templateParams,
        "z4eexGAovOTNNIeIo"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thanks, message sent successfully");
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.jpg" alt="" fill className={styles.img} priority />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            ref={nameRef}
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="Enter Subject"
            ref={subjectRef}
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email"
            ref={emailRef}
          />
          <textarea
            name="message"
            id="message"
            cols="25"
            rows="7"
            required
            placeholder="Enter Message..."
            ref={messageRef}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default page;
