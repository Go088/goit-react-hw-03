import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

const ContactForm = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.wrapForm}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.button} type="submit">
          Ad contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
