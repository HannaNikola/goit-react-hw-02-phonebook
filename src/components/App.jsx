import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';


const phonebookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required'),
  number: Yup.number().min(6, 'Too short!').required('This field is required'),

});


export const App = () => {
  return (
    <div>
      <h1>PhoneBook</h1>
      <Formik
        initialValues={{
          contacts: [],
          name: '',
          number: '',
        }}

        validationSchema={phonebookSchema}
        onSubmit={values => {
          console.log(values)
        }}
        
      >
        
        <Form>
          <label htmlFor="name">Name</label>
            <Field id="name" name="name"/>
          <ErrorMessage name="name"/>
        

          <label type="tel" htmlFor="number">Number</label>
          <Field id="s" name="number"  />
          <ErrorMessage name="number" />
          
          <button type="submit">Add contact</button>
          </Form>
      
      </Formik>
    </div>
  );
};
