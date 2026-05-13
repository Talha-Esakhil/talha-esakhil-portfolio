function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="container">
          <div>
            <h3>Frontend Technologies:</h3>
          </div>
          <div className="frontend-technologies">
            <div className="html box">HTML</div>
            <div className="css box">CSS</div>
            <div className="js box">JAVASCRIPT</div>
            <div className="react box">REACT JS</div>
            <div className="ts box">TYPESCRIPT</div>
          </div>
        </div>
        <div className="container">
          <div>
            <h3>Tools:</h3>
          </div>
          <div className="tools">
            <div className="git box">GIT</div>
            <div className="github box">GITHUB</div>
          </div>
        </div>
        <div className="container">
          <div>
            <h3>Concepts:</h3>
          </div>
          <div className="concepts">
            <div className="rest-apis box">REST APIS</div>
            <div className="responsvie-design box">RESPONSIVE DESIGN</div>
            <div className="component-architecture box">
              COMPONENT ARCHITECTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
