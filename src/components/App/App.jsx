import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const currentContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contact, setContact] = useState(currentContacts);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(5),
      name: values.name,
      number: values.number,
    };
    setContact(currentContacts.push(newContact));
    actions.resetForm();
  };

  const filteredContact = currentContacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(inputValue.toLowerCase())
  );

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required"),
    number: Yup.string().required("Required"),
    // .matches(
    //   /^\d{3}-\d{2}-\d{2}$/,
    //   "Phone number must be in the format XXX-XX-XX"
    // ),
  });

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      />
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList list={filteredContact} />
    </div>
  );
};
