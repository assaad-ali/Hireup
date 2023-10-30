import {useFormik} from 'formik';
import './authForm.css'

const LoginForm = () => {

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
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

      
      <button type='submit'>Login</button>

    </form>
  )
}

export default LoginForm;