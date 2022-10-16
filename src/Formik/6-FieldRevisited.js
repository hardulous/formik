import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

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
    comment:"",
    address:""
}
const onSubmit = (values) => {
    console.log("On submit values", values);
}


const FieldRevisited = () => {

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
          placeholder="Enter Name"
        />
        <ErrorMessage name="name"/>

        <label htmlFor="email">Email</label>
        <Field
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
        />
        <ErrorMessage name="email"/>

        <label htmlFor="=channel">Channel</label>
        <Field
          type="text"
          id="channel"
          name="channel"
          placeholder="Enter Channel"
        />
        <ErrorMessage name="channel"/>

        <label htmlFor="comment">Comment</label>
        <Field
          id="comment"
          name="comment"
          placeholder="Enter Comment"
          as='textarea'  // show textarea instead of input tag
        />
        <ErrorMessage name="comment"/>

        {/* Render prop way of Field */}
        <label htmlFor="address">address</label>

        {/* here as we have mention name attribute as address so formState consist of data related to address state of form */}
        <Field id="address" name="address">
          {
            (formState)=>{
                console.log(formState)
                const {field,form,meta} = formState
                return <div>
                    <input type="text" id="address" {...field} />
                    <span style={{color:"red"}}>{meta.touched && meta.error}</span>
                </div>
            }
          }
        </Field>

        <button type="submit">Submit</button>

      </Form>

    </Formik>
  );
};

export default FieldRevisited;

// here the field component by default renders the html input tag and behind the scene it hooks up inut element with formik , handleChange , handleBlur and values of formik form field , But another feature of field component is it will pass through any additional prop we specify , like id and placeholder attribute , the same will be present in input tag of DOM

// here Field component can render different html tag other than input with the help of 'as' prop which take name of html tag to render , this as prop can accept value of input , textarea , select or custom react component as well with default input as value 

// instead of as prop we can also use component prop which was depricated and then un-depricated 

// here to get more control of form field and showing error message we use Field component with render prop technique , in these technique we pass function as children of Field component and that function accept prop which consist of Field , whole formik instance and meta object of that Field , and these function must return an input tag 