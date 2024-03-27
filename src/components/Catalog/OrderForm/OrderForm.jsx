import { Formik } from "formik";
import * as Yup from "yup";
import sprite from "../../../assets/sprite.svg";
import {
  CalendarSvg,
  CommentField,
  DateField,
  Datebox,
  Errormsg,
  Form,
  FormContainer,
  FormDescr,
  FormTitle,
  NameField,
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
            <NameField name="name" placeholder="Name" />
            {touched.name && errors.name ? (
              <Errormsg
                name="name"
                component={"span"}
                visible={touched.name && errors.name}
              />
            ) : null}
            {/* <ErrorMessage name="name" /> */}

            <NameField name="email" placeholder="Email" type="email" />
            {touched.email && errors.email ? (
              <Errormsg name="email" component={"span"} />
            ) : null}
            {/* <ErrorMessage name="email" /> */}
            <Datebox>
              <DateField name="bookingdate" placeholder="Booking date" />
              <CalendarSvg width="24px" height="24px">
                <use xlinkHref={sprite + "#calendar"} />
              </CalendarSvg>
            </Datebox>

            {touched.bookingdate && errors.bookingdate ? (
              <Errormsg name="bookingdate" component={"span"} />
            ) : null}
            {/* <ErrorMessage name="bookingdate" /> */}

            <CommentField name="comment" placeholder="Comment" />

            <SubmitBtn type="submit">Send</SubmitBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
