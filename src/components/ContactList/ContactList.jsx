import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ currentList }) {
  return (
    <ul className={css.list}>
      {currentList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
