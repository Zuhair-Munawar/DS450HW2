import { Component } from 'react';
import './About.css';
import profilePic from './profilePic.png';


class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-inner">
          <div className="photo-column">
            <img
              className="profile-photo"
              src={profilePic}
              alt="Profile"
            />
          </div>

          <div className="content-column">
            <h2 className="about-name">Zuhair Munawar</h2>
            <h3 className="about-title">Student • Developer • Designer</h3>
            <p className="about-bio">
              Hello I am a third year Data Science student at New Jersey Institute of Technology. Strong interests in programming, problem solving, and uncovering insights from sophisticated data sets seeking opportunities for data/software engineering internships. Currently developing a strong foundation in the field through course work such as Data Structures & Algorithms, Intensive Linux Programming and Internet Applications.
            </p>

            <div className="skill-list">
              <span className="skill">Python</span>
              <span className="skill">JavaScript</span>
              <span className="skill">HTML & CSS</span>
              <span className="skill">SQL</span>
              <span className="skill">Linux</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;