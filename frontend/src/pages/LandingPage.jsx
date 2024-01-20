import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AuthForm from "../components/authForm/AuthForm";
import "./landingPage.css"

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <main>
          <section className="hero-section">
            <div className="right-container">
            <h1>Find your next job</h1>
            <p>With HireUp, you can find your next job in a few clicks. <br/> We have a wide range of jobs available for you to apply to.</p> 
            </div>
            <AuthForm />
          </section>
          
        </main>
        <Footer/>
    </>
  )
}

export default LandingPage