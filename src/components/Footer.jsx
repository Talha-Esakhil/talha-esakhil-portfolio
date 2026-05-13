function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p className="footer__intro-text">Talha Esakhil - Frontend Developer</p>
        <p className="footer__copyright">©️ 2026 Talha Esakhil</p>
      </div>
      <button
        className="btn btn-scrollToTop"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behaviour: 'smooth',
          });
        }}
      >
        Scroll To Top
      </button>
    </footer>
  );
}

export default Footer;
