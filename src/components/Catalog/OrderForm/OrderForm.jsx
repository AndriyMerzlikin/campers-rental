import { Formik } from "formik";
import * as Yup from "yup";
import {
  Errormsg,
  Field,
  Form,
  FormContainer,
  FormDescr,
  FormTitle,
  SubmitBtn,
} from "./OrderForm.styled";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  bookingdate: Yup.string().required("Required"),
  comment: Yup.string(),
});

export const OrderForm = () => {
  return (
    <FormContainer>
      <FormTitle>Book your campervan now</FormTitle>
      <FormDescr>Stay connected! We are always ready to help you.</FormDescr>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingdate: "",
          comment: "",
        }}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            {touched.name && errors.name ? (
              <Errormsg
                name="name"
                component={"span"}
                visible={touched.name && errors.name}
              />
            ) : null}
            {/* <ErrorMessage name="name" /> */}

            <Field name="email" placeholder="Email" type="email" />
            {touched.email && errors.email ? (
              <Errormsg name="email" component={"span"} />
            ) : null}
            {/* <ErrorMessage name="email" /> */}

            <Field name="bookingdate" placeholder="Booking date" />
            {touched.bookingdate && errors.bookingdate ? (
              <Errormsg name="bookingdate" component={"span"} />
            ) : null}
            {/* <ErrorMessage name="bookingdate" /> */}

            <Field name="comment" placeholder="Comment" />

            <SubmitBtn type="submit">Send</SubmitBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
