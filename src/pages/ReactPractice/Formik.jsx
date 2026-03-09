import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

function FormikForm() {
  const [submitCount, setSubmitCount] = useState(0);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Write Your Email Bro.";
    } else if (values.email.length < 6) {
      errors.email = "Too Short.."
    } else if (!values.email.includes('@')) {
      errors.email = "This Is Not An Email."
    }

    if (!values.password) {
      errors.password = "Want Your Account To Be Open For Everyone?";
    } else if (values.password.length < 4) {
      errors.password = "Don't Be Lazy, Write Some More Letters.";
    } else if (values.password.length < 8) {
      errors.password = "We're Getting There..."
    }

    return errors;
  };

  console.log(submitCount)

  return (
    <div className="reactElementCon formik">
      <h3>Formik Form</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, {resetForm}) => {
          console.log("Submitted values:", values)
          setTimeout(() => {resetForm();setSubmitCount(0)}, 3000)
        }}>

        {({ values, touched, errors }) => (
          <Form noValidate>
            <p><strong>Values:</strong> {JSON.stringify(values, null, 2)}</p>
            <p><strong>Touched:</strong> {JSON.stringify(touched, null, 2)}</p>
            <p><strong>Errors:</strong> {JSON.stringify(errors, null, 2)}</p>
            <br />
            <hr />
            <br />
            <div>
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" type="email"
                     style={{border: errors.email ? "2px solid red" : !errors.email && values.email.length > 6 ? "2px solid green" : "2px solid #8b8b8bff",}} />
              
              {errors.email && (<div className="error">* {errors.email}</div>)}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field id="password" name="password" type="password"
                     style={{border: errors.password ? "2px solid red" : !errors.password && values.password.length > 6 ? "2px solid green" : "2px solid #8b8b8bff",}} />
              
              {errors.password && (<div className="error">* {errors.password}</div>)}
            </div>
            <button type="submit" onClick={() => setSubmitCount(prev => prev + 1)}>Login</button>
            {!errors.email && !errors.password && values.email && values.password && submitCount > 0 && (
              <div className="success">
                {submitCount == 1 ? "You're Good." : submitCount < 4 ? "After A Few Mistakes, You Made It." : submitCount > 6 ? "Finally Bruh...." : "Not Bad." }
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm
