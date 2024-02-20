import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ currentList, filter }) {
  return (
    <ul className={css.list}>
      {filter.map != []
        ? filter.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} />
            </li>
          ))
        : currentList.map(({ id, name, number }) => (
            <li key={id}>
              <Contact name={name} number={number} />
            </li>
          ))}
    </ul>
  );
}
