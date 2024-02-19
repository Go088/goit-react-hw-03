import Contact from "../Contact/Contact";

export default function ContactList({ currentList }) {
  return (
    <ul className="list">
      {currentList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
