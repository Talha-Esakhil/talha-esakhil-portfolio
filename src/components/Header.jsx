function Header() {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero__info">
          <div className="hero__info--top">
            <h1 className="hero__name">
              Frontend Developer building <br /> responsive, production minded{' '}
              <br />
              web applications.
            </h1>
          </div>
          <div className="hero__info--bottom">
            <p className="hero__description">
              I build interactive web applications with React, TypeScript and
              modern frontend architecture, with a focus on usability
              maintainalbility and performance.
            </p>
          </div>
          <div className="hero__action-btns">
            <button className="btn btn__view-projects">
              <a href="#projects" className="link">
                View Projects
              </a>
            </button>
            <button className="btn btn__contact-me">
              <a href="#contact" className="link">
                Contact Me
              </a>
            </button>
            <button className="btn btn__github">
              <a href="https://www.github.com/talha-esakhil" className="link">
                Github
              </a>
            </button>
          </div>
        </div>

        <div className="hero-img">
          <div className="hero__image-container">
            <img
              src="talhaesakhil.png"
              alt="My Photo."
              className="image hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
