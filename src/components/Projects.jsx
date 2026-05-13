function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1 className="section-title">Projects </h1>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image-container">
              <img
                src="dashminder-app.png"
                alt="E-Commerce App with Api Fetching"
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">DashMinder (Dashboard) App</h3>
              <p className="project-description">
                React Based DashMinder (Dashboard) Application which Manages
                Products, Orders, Users, and Shows the Full Summary Overiew
                page. In addition great statistics and charts interactivity.
              </p>
              <div className="project-tech">
                React, JavaScript, Tailwind CSS and React Router.
              </div>
              <div className="project-buttons">
                <button className="btn project-btn">
                  <a
                    target="_blank"
                    href="https://dash-minder.netlify.app"
                    className="link"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="btn project-btn">
                  <a
                    target="_blank"
                    href="https://github.com/Talha-Esakhil/dash-minder"
                    className="link"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image-container">
              <img
                src="snippetscribe-app.png"
                alt="E-Commerce App with Api Fetching"
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">
                SnippetScribe (Snippet Manager) App
              </h3>
              <p className="project-description">
                SnippetScribe (Snippet Manger) Application that helps users
                Manage their own code snippets for free with numerous features
                of CRUD, favorite, search, filter, and much More.
              </p>
              <div className="project-tech">
                React, TypeScript, Tailwind CSS, Monaco, Highlighter, and
                localStorage.
              </div>
              <div className="project-buttons">
                <button className="btn project-btn">
                  <a
                    target="_blank"
                    href="https://snippet-scribe.netlify.app"
                    className="link"
                  >
                    Live Demo
                  </a>
                </button>
                <button className="btn project-btn">
                  <a
                    target="_blank"
                    href="https://github.com/Talha-Esakhil/snippet-scribe"
                    className="link"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
