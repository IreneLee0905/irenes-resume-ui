import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';


const validation = Yup.object().shape({
  email: Yup.string().email('please insert valid email').required('please insert your email'),
  password: Yup.string().max(10,'please insert valid password').required('please insert your password')
});
const HookComponent = () => {
  let values = {email: "aaa@gmail.com", password: ''};
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={values}
        validationSchema={validation}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <input type="input" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            {errors.email && touched.email && errors.email}

            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
};
export default HookComponent;