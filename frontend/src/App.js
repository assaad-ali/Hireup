import './App.css';
import SignupForm from './components/authForm/SignupForm.jsx';
import LoginForm from './components/authForm/LoginForm.jsx';

function App() {
  return (
      <div className='app'>
        <SignupForm/>
        <LoginForm/>
      </div>

  );
}

export default App;
