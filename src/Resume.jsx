import React from "react";
import "./styles/Resume.css";

const Resume = () => {
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <h1>Giorgi Machitadze</h1>
          <p>
            <strong>Junior Web Developer</strong>
          </p>
        </div>
        <div className="contact">
          <p>📍 Kutaisi, Georgia</p>
          <p>
            📧{" "}
            <a href="mailto:machitadzeg13@gmail.com">machitadzeg13@gmail.com</a>
          </p>
          <p>📞 +995 500 503 113</p>
          <p>
            🔗{" "}
            <a
              href="https://github.com/MachitadzeGiorgi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/giorgi-machitadze-1656412b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      <section className="section">
        <h2>Profile</h2>
        <p>
          Motivated and detail-oriented junior web developer with a solid
          foundation in both frontend and backend technologies. Completed a
          full-stack development program at “Re:Invent” in Tbilisi. Passionate
          about building useful web applications, writing clean code, and
          continuously learning new technologies. Currently expanding React
          experience through personal projects.
        </p>
      </section>

      <section className="skills section">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript, ReactJS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js, MongoDB
          </li>
          <li>
            <strong>Other:</strong> Git, TypeScript (basic), REST APIs,
            Responsive Design
          </li>
        </ul>
      </section>

      <section className="projects section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>TBC Bank Academy Clone</strong> – HTML, CSS, JS
            <br />
            Responsive replica of the TBC Bank Academy webpage.
          </li>
          <li>
            <strong>LizitaFlowerShop</strong> (In Progress) – ReactJS
            <br />
            Developing a responsive React-based e-commerce site for a flower
            shop.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <p>
          <strong>"Re:Invent" Web Development Course</strong> – Tbilisi, Georgia
          <br />
          Full-Stack Web Development (2022–2023)
        </p>
        <p>
          <strong>Kutaisi Public School N31</strong> – Kutaisi, Georgia
          <br />
          General Education (2010–2022)
        </p>
      </section>

      <section className="section">
        <h2>Languages</h2>
        <p>
          <strong>Georgian:</strong> Native
        </p>
        <p>
          <strong>English:</strong> Upper-intermediate
        </p>
      </section>

      <section className="section">
        <h2>Interests</h2>
        <p>Web development, technology, music, traveling, gym, cars</p>
      </section>
    </div>
  );
};

export default Resume;
