import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="landingPage-footer">
      <div className="footer-content">
        <p>HireUp © {year}</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Copyright Policy</a>
          <a href="#">Brand Policy</a>
          <a href="#">Guest Controls</a>
          <a href="#">Community Guidelines</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
