import "./App.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
const initialValues = {
  login: "",
  password: "",
};
const userSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});
export const handleSubmit = (value, { resetForm }) => {
  console.log(value);
  resetForm();
};
function App() {
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="login">Login</label>
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="div" />
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
