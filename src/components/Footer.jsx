export default function Footer() {
  return (
    <footer className="site-footer" style={{ padding: "2rem 1rem", textAlign: "center" }}>
      
      {/* Social Links Flex Container */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "1rem" }}>
        
        {/* GitHub */}
        <a href="https://github.com/Aman345uel" target="_blank" rel="noreferrer" style={{ color: "inherit" }} aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/amanuel-merid-a67380365/" target="_blank" rel="noreferrer" style={{ color: "inherit" }} aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        {/* Telegram (Paper Plane icon) */}
        <a href="https://t.me/aman123uel" target="_blank" rel="noreferrer" style={{ color: "inherit" }} aria-label="Telegram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
        </a>
      </div>

      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Amanuel</p>
    </footer>
  );
}