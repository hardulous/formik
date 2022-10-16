import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const YupRules = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Not a valid email format"),
  channel: Yup.string().required("Channel is required"),
});
const initialValues = {
    name: "",
    email: "",
    channel: "",
}
const onSubmit = (values) => {
    console.log("On submit values", values);
}

const FormikComponent = () => {

  return (

    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={YupRules}
    >
      <Form>

        <legend>Simple Form</legend> <br />
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id="name"
          name="name"
        />
        <ErrorMessage name="name"/>

        <label htmlFor="email">Email</label>
        <Field
          type="email"
          id="email"
          name="email"
        />
        <ErrorMessage name="email"/>

        <label htmlFor="=channel">Channel</label>
        <Field
          type="text"
          id="channel"
          name="channel"
        />
        <ErrorMessage name="channel"/>
        <button type="submit">Submit</button>

      </Form>

    </Formik>
  );
};

export default FormikComponent;

// 1. Formik component

// Here Formik component is a replacement of useFormik() hook , the argument object which we pass to useFormik hook is passed as props to Formik component , it acts as provider component to other formik components

// 2. Form component

// The Form component of formik handlesubmit is mentioned in onSubmit props of formik component , it acts as a wrapper to formik Field component 

// 3. Field component 

// it acts as a replacement of input field of form , and now we dont have to use getFieldProps() method because Field component hooks up input to top level Formik component , it uses name attribute to match up with formik state , by default Field component render as input element in DOM

// 4. ErrorMessage component 

// here so far we have used formik.errors and formik.touched proeprty to show error but now we will use ErrorMessage component , in ErroMessage component pass the name prop whose value is equal to name attribute of Field component , the ErrorMessage component behind the scene will take care of rendering the error message for the particular field indicated by name prop only if field been visited and if error with that field name do exist 