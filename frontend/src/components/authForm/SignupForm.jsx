import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Enter a valid email.").required("Email is required."),
  password: Yup.string().required("Password is required.").min(8, "Password should be at least 8 characters long.").max(32, "Password should not exceed 32 characters."),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match.").required("Confirm Password is required.")
});

const SignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {

        const response = await axios.post('http://localhost:5000/api/v1/auth/signup', values);
        // console.log('response:\n',response);
        navigate("/home");
      } catch (error) {
        console.error("Signup error", error);
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className= "auth-form">

      <input 
        type='text'
        name='username'
        placeholder='Username'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      <input
        type="password"
        name='password'
        placeholder='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
      <button type='submit'>Signup</button>

    </form>
  )
}

export default SignupForm;