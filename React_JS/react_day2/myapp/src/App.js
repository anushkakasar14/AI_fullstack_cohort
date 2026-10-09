
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AK</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>
            Anushka <span>Kasar</span>
          </h1>

          <h2>Full-Stack Developer | AI Enthusiast</h2>

          <p className="intro">
            I am a Computer Science & Design Engineering graduate
            passionate about building modern web applications and
            exploring the world of Artificial Intelligence.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-logo">
          <div className="logo-circle">
            AK
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="section">

        <p className="section-title">ABOUT ME</p>

        <h2>Building my journey in AI & Full-Stack Development</h2>

        <p className="about-text">
          I recently graduated with a Bachelor's degree in
          Computer Science & Design Engineering. Currently, I am
          developing my skills in Full-Stack Python Development,
          Generative AI and modern web technologies.
        </p>

        <p className="about-text">
          My goal is to become an AI-powered Full-Stack Developer
          and build practical applications that combine beautiful
          user interfaces, powerful backend systems and intelligent
          AI solutions.
        </p>

      </section>

      {/* Education Section */}
      <section className="section education">

        <p className="section-title">EDUCATION</p>

        <div className="info-card">
          <h3>B.E. Computer Science & Design Engineering</h3>

          <p>
            Dr. Vithalrao Vikhe Patil College of Engineering,
            Ahilyanagar
          </p>

          <span>Graduated – 2026</span>
        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="section">

        <p className="section-title">SKILLS</p>

        <h2>Technologies I'm learning & working with</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML • CSS • JavaScript • React • Tailwind CSS</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Python • APIs • Database • Backend Development</p>
          </div>

          <div className="skill-card">
            <h3>AI & GenAI</h3>
            <p>Generative AI • AI Applications • Chatbots • Automation</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git • GitHub • VS Code • n8n • AI Tools</p>
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="section">

        <p className="section-title">PROJECTS</p>

        <h2>Things I've worked on</h2>

        <div className="projects-container">

          <div className="project-card">
            <span>01</span>
            <h3>AI-Powered Portfolio</h3>
            <p>
              A modern personal portfolio designed to showcase
              my development skills, projects and AI journey.
            </p>
            <small>React • JavaScript • CSS • AI</small>
          </div>

          <div className="project-card">
            <span>02</span>
            <h3>Diabetic Retinopathy Prediction</h3>
            <p>
              A Deep Learning based system that predicts diabetic
              retinopathy stages from fundus images.
            </p>
            <small>Python • CNN • Django • Machine Learning</small>
          </div>

          <div className="project-card">
            <span>03</span>
            <h3>Parijatak Home Textile</h3>
            <p>
              A modern website concept for a home textile brand
              focused on clean design and product presentation.
            </p>
            <small>HTML • CSS • JavaScript • Responsive Design</small>
          </div>

        </div>

      </section>

      {/* Career Goal */}
      <section className="career-section">

        <p className="section-title">MY GOAL</p>

        <h2>
          Building intelligent solutions
          <br />
          for a smarter tomorrow.
        </h2>

        <p>
          Currently exploring opportunities in Full-Stack Development,
          AI Engineering and Generative AI.
        </p>

      </section>

      {/* Contact */}
      <section id="contact" className="section contact">

        <p className="section-title">CONTACT</p>

        <h2>Let's build something meaningful.</h2>

        <p>
          I'm open to opportunities, collaborations and
          interesting projects.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn primary"
        >
          Get In Touch
        </a>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Anushka Kasar</p>
        <p>Full-Stack Developer • AI Enthusiast</p>
      </footer>

    </div>
  );
}

export default App;
