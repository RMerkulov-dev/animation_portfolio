import s from "./Contacts.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ReactComponent as Mail } from "../../assets/icons/email.svg";
import { ReactComponent as Tel } from "../../assets/icons/phone.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Telegramm } from "../../assets/icons/telegramm.svg";
import { RiMailSendLine } from "react-icons/ri";

import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Container from "../Container/Container";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53jfxv6",
        "template_0w8gr42",
        e.target,
        "YvY8uSNnL7NliQW8N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Include the email address of the person who wrote the email in the email body
    const fromName = e.target.name.value;
    const fromEmail = e.target.email.value;
    const message = `New message from ${fromEmail}: ${e.target.message.value}`;
    emailjs
      .send(
        "service_53jfxv6",
        "template_0w8gr42",
        { from_name: fromName, from_email: fromEmail, message_html: message },
        "YvY8uSNnL7NliQW8N"
      )
      .then(
        (result) => {
          toast.success(" Your email was sent!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: <RiMailSendLine />,
            style: {
              backgroundColor: "rgba(171,171,209,0.53)",
              borderRadius: "8px",
              boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
            },
            progressBarStyle: {
              backgroundColor: "#ABABD1",
            },
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={s.contactsWrapper}>
      <div className={s.contactsMedia}>
        <h3 className={s.contactsTitle}>Contact us</h3>
        <form className={s.contactForm} onSubmit={sendEmail}>
          <label>
            <input
              type="text"
              name="name"
              className={s.contactInput}
              placeholder="Enter your name"
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              className={s.contactInput}
              placeholder="Enter your email"
            />
          </label>
          <textarea
            name="message"
            className={s.contactInput}
            rows={10}
            placeholder="Add your message"
          />
          <input className={s.btnSubmit} type="submit" value="Send" />
        </form>
      </div>
      <div className={s.contactsMedia}>
        <h3 className={s.contactsTitle}>Bielik Serhii</h3>
        <div className={s.contactContainer}>
          <Mail />
          <a href="mailto:belikaarbo@gmail.com">belikaarbo@gmail.com</a>
        </div>
        <div className={s.contactContainer}>
          <Tel />
          <a href="tel:+380503934859">+380503934859</a>
        </div>
        <div className={s.links}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className={s.iconLink} />
          </a>
          <a href="https://t.me/Suzui_B" target="_blank" rel="noreferrer">
            <Telegramm className={s.iconLink} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
