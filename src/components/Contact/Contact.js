import React, { useRef } from "react";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Name Must only Text Number Not valid")
      .min(4, "Minimum 4 Char Required")
      .required("Name is required")
      .typeError("Name Contain only text"),
    subject: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Subject Contain Only text")
      .min(5, "Minimum 5 Char Required")
      .required("Mail Subject is Required"),
    message: yup
      .string()
      .min(20, "Minimum 20 Char Required")
      .required("Please Enter Message"),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_944okk9", "template_457nue7", form.current, {
        publicKey: "kwVwjcy8XMz3A-0xA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const onSubmit = (data) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You wan't be send Email!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Send it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          sendEmail();
          reset();
          swalWithBootstrapButtons.fire({
            title: "Success",
            text: "Email has been Send Successfully",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "oops! You cancelled on Sending Mail",
            icon: "error",
          });
        }
      });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <section className="form">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <h1>Get in touch</h1>
              <label htmlFor="name">
                FULL NAME
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="input"
                  {...register("name")}
                />
                <br />
                {errors.name && (
                  <span id="error-msg">{errors.name.message}</span>
                )}
              </label>
              <br />
              <label htmlFor="subject">
                SUBJECT
                <br />
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="input"
                  {...register("subject")}
                />
                <br />
                {errors.subject && (
                  <span id="error-msg">{errors.subject.message}</span>
                )}
              </label>
              <br />
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                placeholder="Message"
                cols="4"
                rows="5"
                {...register("message")}
              ></textarea>
              <br />
              {errors.message && (
                <span id="error-msg">{errors.message.message}</span>
              )}
              <button
                className="submit"
                value="send"
                type="submit"
                disabled={!isValid}
                onClick={onSubmit}
              >
                Send Message
              </button>
            </form>
          </section>
          <section className="address">
            <h2>Let's get in touch</h2>
            <p>Now Currently i'am open to work</p>
            <div className="location">
              <div>
                <h3> Address </h3> <p>Natham , Dindigul(dt),TamilNadu,INDIA</p>
              </div>
            </div>
            <div className="phone">
              <div>
                <h3> Phone </h3> <p>+91 7639449218</p>
              </div>
            </div>
            <div className="email">
              <div>
                <h3> Email </h3> <p>developershuresh07&#64;gmail.com</p>
              </div>
            </div>
            <div className="social-container">
              <div className="github-container">
                <div className="github">
                  <h3> Github </h3>
                  <a href="https://github.com/Sureshwebdeveloper">
                    <SiGithub className="icon" />
                  </a>
                </div>
              </div>
              <div className="linkedin-container">
                <div className="linkedin">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/suresh-frontenddeveloper/">
                    <GrLinkedin className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
