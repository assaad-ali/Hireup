import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AuthForm from "../components/authForm/AuthForm";

const LandingPage = () => {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main>
          <AuthForm />
        </main>
        <Footer/>
    </>
  )
}

export default LandingPage