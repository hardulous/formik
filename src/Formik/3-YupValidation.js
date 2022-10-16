import React from "react";
import { useFormik } from "formik";

// get Yup
import * as Yup from 'yup'

// here defining the validation for form field 
const YupRules = Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().required('Email is required').email('Not a valid email format'),
    channel:Yup.string().required('Channel is required')
})

const YupValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },

    onSubmit: (values) => {
      console.log("On submit values", values);
    },

    validationSchema:YupRules
  });

  console.log("The yup validation",formik.errors)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

        <legend>Simple Form</legend> <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="=channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default YupValidation;

// We can do form validation using library called Yup , get by command npm install yup

// here useFormik object also take another property called validateSchema in which we can pass yup function which is doing validation 

// to learn more go to https://www.npmjs.com/package/yup