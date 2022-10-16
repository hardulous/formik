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

const ReduceBoilerplate = () => {
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
          {...formik.getFieldProps('name')}
          />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps('email')}
          />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label htmlFor="=channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...formik.getFieldProps('channel')}
        />
        {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default ReduceBoilerplate;

// in current formik form we have 3 props onChange , value and onBlur are same for all 3 form field , so to avoid repetition formik provide a method getFieldProps which will add all these prop to input field 

// so here the onChange={formik.handleChange} ,value={formik.values.name} , onBlur={formik.handleBlur} props will be replaced by using {...formik.getFieldProps('name of form field')}