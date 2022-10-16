import React from "react";
import { useFormik } from "formik";

const VisitedField = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },

    onSubmit: (values) => {
      console.log("On submit values", values);
    },

    validate: (values) => {
      console.log("Validate values", values);
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Requires";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }
      if (!values.channel) {
        errors.channel = "Required";
      }

      return errors;
    },
  });

  console.log("The visited field",formik.touched)

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
        {/* Showing error if exist and is visited by user first */}
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

export default VisitedField;

// here at this moment if we voilate any field validation then all other field error are also coming which is not good ui experience so now we will do something by which the user will be shown error of that field which is already visited by user and not of other field

// to get track of visited field we have to add onBlur prop on form input element in which we pass formik.handleBlur. the formik store visited field info in formik.touched

// now first if we write something on email field and then go out then formik.touched.email will be set to true and rest is false 