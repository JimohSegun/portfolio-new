import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hbb7dh",
        "template_ybvpx9d",
        form.current,
        "gDC6zgj77zGYj4wlP"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            form.current.reset();
            toast.success("Message sent successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.error("Failed to send message", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        },
        (error) => {
          toast.error("Failed to send message", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>segunjimoh13@gmail.com</h5>
            <a href="mailto:segunjimoh13@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaXTwitter className="contact__option-icon" />
            <h4>X</h4>
            <h5>jimohThompson</h5>
            <a href="https://twitter.com/jimohThompson">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          {/* client side validation */}
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
