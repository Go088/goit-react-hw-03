import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.wrapForm}>
        <label htmlFor="username">Name</label>
        <Field className={css.input} type="text" name="name" id="username" />
        <label htmlFor="phone">Number</label>
        <Field className={css.input} type="tel" name="number" id="phone" />
        <button className={css.button} type="submit">
          Ad contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
