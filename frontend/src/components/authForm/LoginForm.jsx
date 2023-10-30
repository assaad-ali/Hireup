import {useFormik} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
    email: '',
    password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try{
        
        console.log("values in onSubmit", values)

      }catch(err){
        console.log(err);
      }
    }

});

return (
    <form onSubmit={formik.handleSubmit} className="auth-form">
    <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
    />
    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

    <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
    />
    {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

    <button type="submit">Login</button>

    </form>
  )
}

export default LoginForm;