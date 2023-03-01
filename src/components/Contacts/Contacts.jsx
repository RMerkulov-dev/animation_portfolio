import s from "./Contacts.module.scss";
import { ReactComponent as Mail } from "../../assets/icons/email.svg";
import { ReactComponent as Tel } from "../../assets/icons/phone.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Telegramm } from "../../assets/icons/telegramm.svg";

const Contacts = () => {
  return (
    <div className={s.contactsWrapper}>
      <div className={s.contactsMedia}>
        <h3 className={s.contactsTitle}>Bielik Serhii</h3>
        <div className={s.contactContainer}>
          <Mail />
          <a href="mailto:belikaarbo@gmail.com">belikaarbo@gmail.com</a>
        </div>
        <div className={s.contactContainer}>
          <Tel />
          <a href="tel:+380976998008">+380976998008</a>
        </div>
        <div className={s.links}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="https://t.me/yourusername">
            <Telegramm />
          </a>
        </div>
      </div>

      <div className={s.contactsMedia}>
        <h3 className={s.contactsTitle}>Contact us</h3>
        <form className={s.contactForm}>
          <label>
            <input type="text" className={s.contactInput} />
          </label>
          <label>
            <input type="email" className={s.contactInput} />
          </label>
          <button className={s.btnSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
