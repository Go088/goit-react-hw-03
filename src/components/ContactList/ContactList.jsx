import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ list }) {
  return (
    <ul className={css.list}>
      {list.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
