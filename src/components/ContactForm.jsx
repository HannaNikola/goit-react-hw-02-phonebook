
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';




const phonebookSchema = Yup.object().shape({
 name: Yup.string().min(3, 'Too short!').required('This field is required'),
 number: Yup.number().min(6, 'Too short!').required('This field is required'),

});


export const ContactForm = ({ onAdd }) => {
    return (
        <div>
            <Formik
                initialValues={{
                    // contacts: [],
                    name: '',
                    number: '',
                }}

                validationSchema={phonebookSchema}
                onSubmit={(values, actions) => {
                    onAdd(values);
                    actions.resetForm();
                }}

            >

                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" />
                    <ErrorMessage name="name" />


                    <label type="tel" htmlFor="number">Number</label>
                    <Field id="s" name="number" />
                    <ErrorMessage name="number" />

                    <button type="submit">Add contact</button>
                </Form>

            </Formik>
        </div>
    );
};
