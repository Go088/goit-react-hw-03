import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({
  contact: { id, name, number },
  deleteContact,
}) {
  return (
    <div className={css.listItem}>
      <ul className={css.infoBlock}>
        <li className={css.wrap}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.wrap}>
          <FaPhoneAlt />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={deleteContact} id={id}>
        Delete
      </button>
    </div>
  );
}
