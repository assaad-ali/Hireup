import {useFormik} from 'formik';
import './authForm.css'

const SignupForm = () => {

  const formik = useFormik({
    initialValues:{
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      try{
        
        console.log("values in onSubmit", values)

      }catch(err){
        console.log(err);
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
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      <input
        type="password"
        name='password'
        placeholder='Password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
      <button type='submit'>Signup</button>

    </form>
  )
}

export default SignupForm;