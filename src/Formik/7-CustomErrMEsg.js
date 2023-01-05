import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const YupRules = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Not a valid email format"),
  channel: Yup.string().required("Channel is required"),
  comment: Yup.string().required("Comment is required"),
  address: Yup.string().required("Address is required"),
});

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("On submit values", values);
};

const ErrorComponent = (props)=>{
    console.log(props)
    return <div>{props.children}</div>
}

const CustomErrMsg = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={YupRules}
    >
      <Form>

        <legend>Simple Form</legend> <br />
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" placeholder="Enter Name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" placeholder="Enter Email" />

        {/* Default error message component show error text only */}
        <ErrorMessage name="email" /> 

        <label htmlFor="=channel">Channel</label>
        <Field
          type="text"
          id="channel"
          name="channel"
          placeholder="Enter Channel"
        />
        
        {/* Error message with custom component */}
        <ErrorMessage name="channel" component={ErrorComponent} />

        <label htmlFor="comment">Comment</label>
        <Field
          id="comment"
          name="comment"
          placeholder="Enter Comment"
          as="textarea"
        />
        <ErrorMessage name="comment" />

        <label htmlFor="address">address</label>
        <Field id="address" name="address">
          {(formState) => {
            const { field, form, meta } = formState;
            return (
              <div>
                <input type="text" id="address" {...field} />
                <span style={{ color: "red" }}>
                  {meta.touched && meta.error}
                </span>
              </div>
            );
          }}
        </Field>
        
        {/* Error message with render prop method */}
        <ErrorMessage name="address">
            {
               (errMsg)=>{
                console.log(errMsg)
                 return <div>{errMsg}</div>
               }
            }
        </ErrorMessage>

        <button type="submit">Submit</button>
        
      </Form>
    </Formik>
  );
};

export default CustomErrMsg;

// Here similar to the way Field component accept component prop to render any input element the ErrorMessage component also accept the component props and render prop method as well

// by default ErrorMessage component only render a text node

// if we have used ErrorMessage component with component props then the custom component will accept prop and prop.children will contain the error text message

// but if we have used ErrorMessage component with render prop method then the child function will accept the error msg and must return some jsx