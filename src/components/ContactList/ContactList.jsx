import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ searchContact, deleteContact }) {
  return (
    <ul className={css.list}>
      {searchContact.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
