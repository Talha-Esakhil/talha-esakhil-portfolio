import { FaSquareJs } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
import { BsTypescript } from 'react-icons/bs';
import { FaHtml5 } from 'react-icons/fa6';
import { FaCss } from 'react-icons/fa6';

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
            <div className="icon-box">
              <FaHtml5 style={{ fontSize: '6rem', color: 'red' }} />
            </div>
            <div className="icon-box">
              <FaCss style={{ fontSize: '6rem', color: 'blue' }} />
            </div>
            <div className="icon-box">
              <FaSquareJs style={{ fontSize: '6rem', color: 'yellow' }} />
            </div>
            <div className="icon-box">
              <FaReact style={{ fontSize: '6rem', color: 'blue' }} />
            </div>
            <div className="icon-box">
              <BsTypescript style={{ fontSize: '5.5rem', color: 'blue' }} />
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <h3>State & Data:</h3>
          </div>
          <div className="state_data">
            <div className="rest-apis box">Rest APIs</div>
            <div className="localstorage box">localStorage</div>
            <div className="api box">API Integration</div>
          </div>
        </div>
        <div className="container">
          <div>
            <h3>Engineering:</h3>
          </div>
          <div className="engineering">
            <div className="git_github box">Git/GitHub</div>
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
