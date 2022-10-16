import SimpleForm from "./Formik/1-SimpleForm";
import VisitedField from "./Formik/2-VisitedField";
import YupValidation from "./Formik/3-YupValidation";
import ReduceBoilerplate from "./Formik/4-ReduceBoilerplate";
import FormikComponent from "./Formik/5-FormikComponent";
import FieldRevisited from "./Formik/6-FieldRevisited";

function Formik() {
  return (
    
    <>
    
       {/* FORMIK */}
       <h1>FORMIK</h1>
       
       {/* Simple Formik Form */}
       {/* <SimpleForm/> */}

       {/* Visited Field */}
       {/* <VisitedField/> */}

       {/* Yup Validation */}
       {/* <YupValidation/> */}

       {/* Reduce Boilerplate code of formik */}
       {/* <ReduceBoilerplate/> */}

       {/* Formik Components */}
       {/* <FormikComponent/> */}

       {/* Field Revisited */}
       <FieldRevisited/>

    </>

  );
}

export default Formik;

// ############ FORMIK ############

// 1. Formik is a library that helps us deal with forms in react , it helps us with 3 parts

// 1. Managing form data , making form state which is form field with value
// 2. Form submission , allow us to easily handle form submissions 
// 3. Form validation and displaying error messages 

// Although we can do same task without formik but still formik helps you deal with forms in a scalable , performant and easy way 

// Install Formik by command npm install formik

// 2. Here formik reduce our boilerplate code to handle form , but also provide many component that use react context , some of them are Formik , Form , Field and ErrorMessage 