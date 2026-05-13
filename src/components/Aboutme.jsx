function Aboutme() {
  return (
    <section id="aboutme">
      <h1 className="aboutme-header">About Me</h1>
      <div className="about-container">
        <div className="about-image__container">
          <img src="talhaesakhil.png" alt="My Image" className="about-image" />
        </div>
        <div className="about-text__container">
          <h1 className="about-name">Talha Esakhil</h1>
          <p className="about-text">
            I am a passionate Frontend Developer focused on building modern,
            responsive web applications using JavaScript and React. <br />{' '}
            <br />
            I enjoy solving real world problems through clean code and
            continuously improving my development skills by building real
            projects. <br /> <br /> Currently focused on Frontend and looking
            for Remote opportunites where I can contribute and Continue my
            Learning Journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
