import React from 'react'
import { useFormik } from 'formik'

const SimpleForm = () => {

  // it takes an object as parameter and then return an object which contain many properties and method for form  
  const formik = useFormik({

    initialValues:{
        name:"",
        email:"",
        channel:""
    },

    onSubmit:(values)=>{  // on submit also do e.preventDefault()
      console.log("On submit values",values)
    },

    validate:(values)=>{  // execute everytime we change form state
      console.log("Validate values",values)
      let errors = {};

      if(!values.name){
        errors.name = "Required"
      }
      if(!values.email){
        errors.email="Requires"
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email="Invalid email format"
      }
      if(!values.channel){
        errors.channel="Required"
      }

      return errors

    }

  })   

  // console.log("The formik object",formik)
  // console.log("The formik value",formik.values) // will change in real time 
  console.log("The formik errors",formik.errors) // it will show error object return by validate function 

  return (

    <div>
        <form onSubmit={formik.handleSubmit}>

            <legend>Simple Form</legend> <br />
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
            
            {/* Showing error if exist */}
            {formik.errors.name? <div>{formik.errors.name}</div> : null }

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

            {formik.errors.email? <div>{formik.errors.email}</div> : null }

            <label htmlFor="=channel">Channel</label>
            <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />

            {formik.errors.channel? <div>{formik.errors.channel}</div> : null }

            <button type='submit'>Submit</button>

        </form>
    </div>

  )
  
}

export default SimpleForm

// everything in formik work by useFormik hook provided by formik

// useFormik() hook must pass object as parameter otherwise return error , and that object take property like initialValues which is also an object which contain initial values for all form field , and must take care that the properties of initial value muse be similar to one present in name attribute of individual field 

// after this 2nd step is to add onChange and value attribute in all input field  , in onChange now we will pass formik.handleChange provided by formik and in value prop we will pass formik.values."name of field in state" , and now our form is being tracked by formik 

// by formik.handleChange the formik.values will get changed in real time and now our field become controlled component 

// to handle form submission with formik is very simple , 1st step we need to specify onSubmit handler on form tag which is equal to formik.handleSubmit and 2nd step in which formik object also take onSubmit property which is a function which takes current form state as argument and execute everytime we hit submuit button 

// to perform form validation using formik , here in formik hook we pass another property called validate which is also a function which automatically receives the form state value , this validate function must satisfy some condition for formik to work properly , 1st condition this function must return an object which contain error message for each field mention in form state , 2nd is the object key must be similar to form state key and last is to return that object and 3rd in order to use this error message we use formik.error property of formik object returned by useFormik() hook

// here at this moment if we voilate any field validation then all other field error are also coming which is not good ui experience so now we will do something by which the user will be shown error of that field which is already visited by user and not of other field 