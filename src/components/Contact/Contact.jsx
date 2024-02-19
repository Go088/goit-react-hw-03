import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <div className={css.listItem}>
      <div className={css.infoBlock}>
        <div className={css.wrap}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.wrap}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button className={css.button}>Delete</button>
    </div>
  );
}
