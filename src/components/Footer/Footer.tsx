import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {new Date().getFullYear()} - Artvu</p>
    </footer>
  );
};

export default Footer;
