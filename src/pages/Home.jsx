import { useState } from "react";
import { Link } from "react-router-dom";

// --- 1. Featured Projects Data ---
const featuredProjects = [
  {
    title: "Gold Ethiopia Application",
    description: "An android mobile application that allows user to monotor and track daily gold price.",
    technologies: ["Flutter", "Fast API", "PostgreSQL"],
    link: "https://play.google.com/store/apps/details?id=com.masero.yeWerq",
    
    features: [
      "daily price tracking",
      "News related to gold",
      "Alerts and notifications for price changes",
      "User-friendly interface",  
      "Marketplace for selling and buying goods"
    ],
    category: ["Internship"]
  },
  {
    title: "Gold Ethiopia Website",
    description: "A website for the Gold Ethiopia mobile application.",
    technologies: ["React", "Next.js","Fast API", "postgreSQL"],
    link: "https://goldethiopia.com/",
    features: [
      "daily price tracking",
      "News related to gold",,
      "User-friendly interface",  
      "Admin page for managing users, feedback, marketplace and news in the application",
    ],
    category: ["Internship"]
  },
  {
    title: "Landing page for Armada Mining",
    description: "A landing page that showcases the services and projects of Armada Mining.",
    technologies: ["React"],
    link: "https://armadaeth.com/",
    features: [
      "pages describing the services and projects of Armada Mining",
      "contact page to contact the company",
      "interactive image to showcase the company's projects",
      "responsive design for different screen sizes"
    ],
    category: ["Internship"]
  },
];

// --- 2. Experience Data ---
const experiences = [
  {
    company: "Canvas Technologies",
    role: "Software Developer Intern",
    duration: "March 2026 - August 2026",
    description: "I Worked for 5 months in myinternship as a software developer intern at Canvas Technologies. I Worked on on mobile application gold ethiopia fixing bugs and adding new features to the application. I worked on building a Landing page for Armada Mining using React. I also worked on building a website for the Gold Ethiopia mobile application using React, Next.js, Fast API and PostgreSQL. I Deployed newly built websites on Server and made sure everything works smoothly. I sent updates to Gold ethiopia mobile application through play store and fixed any issues that were reported by users.",
    letterPdf: "/Scan_15_Sep_2138.pdf"
  }
];

export default function Home() {
  const [modalPdf, setModalPdf] = useState(null);
  return (
      <>
      {/* -------- PDF Modal Lightbox -------- */}
      {modalPdf && (
        <div
          onClick={() => setModalPdf(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
          }}
        >
          {/* Stop click inside the modal from closing it */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              height: "90vh",
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
            }}
          >
            {/* X Close Button */}
            <button
              onClick={() => setModalPdf(null)}
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                zIndex: 10,
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                border: "none",
                background: "#17202a",
                color: "#fff",
                fontSize: "1.1rem",
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "inherit"
              }}
              aria-label="Close"
            >
              ✕
            </button>
            {/* PDF Viewer */}
            <iframe
              src={modalPdf}
              title="Recommendation Letter"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="hero">
        <p className="eyebrow">Welcome to my portfolio</p>
        <h1>Hello, I’m Amanuel Merid.</h1>
        <p className="intro">
I’m a computer science graduate who specializes in building website and mobile applications.
        </p>
        <Link className="button" to="/projects">
          View my projects
        </Link>
      </section>

 {/* -------- Experience Section -------- */}
      <section style={{ marginTop: "4rem" }}>
        <p className="eyebrow">My Journey</p>
        <h2 style={{ marginBottom: "1.5rem" }}>Experience</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experiences.map((exp, index) => (
            <article key={index} className="card" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {/* Left Side: Job Info */}
              <div style={{ flex: "1 1 300px" }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem" }}>{exp.role}</h3>
                <p style={{ fontWeight: 600, color: "#17202a", margin: "0 0 1rem 0" }}>
                  {exp.company}{" "}
                  <span style={{ color: "#596273", fontWeight: 400 }}>• {exp.duration}</span>
                </p>
                <p style={{ margin: 0, lineHeight: 1.6, color: "#596273" }}>{exp.description}</p>
              </div>
              {/* Right Side: Letter Thumbnail — clicking opens the modal */}
{exp.letterPdf && (
  <div style={{ flex: "0 0 150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <p style={{ fontSize: "0.85rem", color: "#596273", margin: "0 0 0.75rem 0", fontWeight: 600, textAlign: "center" }}>
      Recommendation Letter
    </p>
    <button
      onClick={() => setModalPdf(exp.letterPdf)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        padding: "1rem",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        background: "#f7f8fa",
        cursor: "pointer",
        fontFamily: "inherit",
        color: "#5b4bdb",
        fontWeight: 600,
        fontSize: "0.85rem",
        transition: "box-shadow 0.15s ease"
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
    >
      {/* Document Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      View Letter
    </button>
  </div>
)}
            </article>
          ))}
        </div>
      </section>

      {/* --- Featured Projects Section --- */}
      <section style={{ marginTop: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 style={{ marginBottom: 0 }}>Featured Projects</h2>
          </div>
          <Link className="button" to="/projects">
            See more projects
          </Link>
        </div>
        
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.technologies.map((technology) => (
                  <li className="tag" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              {project.link && (
                <div style={{ marginTop: "1.5rem", display: "block" }}>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ color: "#5b4bdb", fontWeight: 650, textDecoration: "none" }}>
                    View project →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* --- Skills Preview Section --- */}
      <section style={{ marginTop: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="eyebrow">What I work with</p>
            <h2 style={{ marginBottom: 0 }}>Core Skills</h2>
          </div>
          <Link className="button" to="/skills">
            See all skills
          </Link>
        </div>
        
        <div className="card-grid">
        <article className="card">
          <h2>Frontend</h2>
          <p>React, Next.js, JavaScript, HTML, CSS, Bootstrap</p>
        </article>
        <article className="card">
          <h2>Backend</h2>
          <p>Django, Node, Express, Nest, PHP, FastAPI</p>
        </article>
                <article className="card">
          <h2>Database</h2>
          <p>PostgreSQL, MySQL</p>
        </article>
        </div>
      </section>
    </>
  );
}