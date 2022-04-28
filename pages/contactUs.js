import React, { useRef } from "react";
import Layout from "../components/Layout";
import { ToastContainer, Toast, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import styles from "../styles/AuthForm.module.css";
import { useRouter } from 'next/router'

function ContactUs() {
  const router = useRouter()
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_a51xrdp", "template_tf6woji", form.current, "Bq5FJZ-ktAlsWmcX9")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          router.push('/')
         
         
          router.push('/')
        },
        (error) => {
          console.log(error.text);
          console.log('errrrrr')
        }
      );
  };

  return (
    <Layout>
     

      <div className={styles.auth}>
   
      <section className="heading">
        <h1>Contact us</h1>
      </section>
        <form ref={form} onSubmit={sendEmail}>
          <div >
            <label>Name</label>
            <input type="text" className="form-control" name="name" />
            <div >
              <label>Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div >
              <label>Message</label>
              <textarea type="message" />
            </div>
          </div>
          <div >
            <button className="btn btn-block">Send</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ContactUs;