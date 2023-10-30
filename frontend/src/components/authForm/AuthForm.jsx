import './authForm.css'
import { useState } from 'react';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx'


const AuthForm =  () => {

    const [isLogin, setIsLogin] = useState(true)
    return (
        <section className="auth-section">
            {isLogin? <LoginForm/> : <SignupForm/>}
            <button className='toggle-auth' onClick={() => setIsLogin(!isLogin)}>
                {isLogin? 'Go to Signup': 'Go to Login'}
            </button>
        </section>
    )
}

export default AuthForm;