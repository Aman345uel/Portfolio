export default function Skills() {
  return (
    <section>
      <p className="eyebrow">What I work with</p>
      <h1>Skills</h1>
      <p className="intro">A selection of tools and technologies I use.</p>

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
        <article className="card">
          <h2>Mobile Application</h2>
          <p>Flutter</p>
        </article>
                <article className="card">
          <h2>Tools</h2>
          <p>Git, GitHub, Visual Studio Code</p>
        </article>
      </div>
            
    </section>
  );
}