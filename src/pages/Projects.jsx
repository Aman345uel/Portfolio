import { useState } from "react";

const projects = [
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
  {
    title: "E-commerce and delivery",
    description: "An e-commerce platform for buying and selling goods with delivery options.",
    technologies: ["Django"],
    link: "",
    features: [
      "Offers variety of products on the platform",
      "Allows users to create an account and login",
      "Search and filter various products",
      "allows for placing multiple orders using cart",
      "secure payment system using third party payment gateway 'Chapa' or pay using the built in wallet system",
      "Track delieveries in real time",
      "send detail of order through email",
      "Barcode scanner for delivery personnal",
      "Admin page for monitoring and managing Stocks, orders, deliveries, and users",
      "allows for regiterations of vendors using their business license and TIN number",
      "allows vendors to track their inventory and sales in real time",
    ],
    category: ["Class Project"]
  },
  {
    title: "Rental House monitoring application",
    description: "A mobile application that allows landlords to monitor and manage their rental properties.",
    technologies: ["Flutter", "Nest.js", "PostgreSQL"],
    link: "",
    features: [
      "Shows the list of rental houses and their details",
      "Shows the total revenue of all the properties",
      "Calculates the toatal yearly tax of the properties",
      "Infoms the landlord the needed amount to be saved monthly to reach the calculated tax amount",
    ],
    category: ["Personal Project"]
  },
  {
    title: "Virtual classroom",
    description: "A virtual classrom to conduct class sessions online with features like video conferencing, chat, and file sharing.",
    technologies: ["Django"],
    link: "",
    features: [
      "Class sessoions using video conferencing",
      "Real time chat for students and teachers",
      "file sharing for students and teachers",
    ],
    category: ["Class Project"]
  },
];

export default function Projects() {
  // This state keeps track of which project cards are expanded
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleDetails = (title) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // --- Helper function to render a section for a specific category ---
  const renderCategory = (categoryTitle) => {
    // Safely filter projects, checking if category is an array or a string
    const categoryProjects = projects.filter((project) => {
      if (!project.category) return false;
      
      // If category is an array like ["Internship"]
      if (Array.isArray(project.category)) {
        return project.category.some(cat => 
          cat.toLowerCase().includes(categoryTitle.toLowerCase())
        );
      }
      
      // If category is a string like "Internship"
      if (typeof project.category === "string") {
        return project.category.toLowerCase().includes(categoryTitle.toLowerCase());
      }
      
      return false;
    });

    // If there are no projects for this category yet, skip drawing the section entirely
    if (categoryProjects.length === 0) return null;

    return (
      <div style={{ marginBottom: "4rem" }}>
        {/* Category Header */}
        <h2 style={{ borderBottom: "2px solid #e5e7eb", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
          {categoryTitle} Projects
        </h2>
        
        <div className="card-grid" style={{ marginTop: "0" }}>
          {categoryProjects.map((project) => (
            <article className="card" key={project.title}>
              <h3 style={{ marginTop: 0 }}>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Flex container placing technologies and the Details button side-by-side */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <ul className="tag-list" style={{ margin: 0, flex: 1 }}>
                  {project.technologies.map((technology) => (
                    <li className="tag" key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => toggleDetails(project.title)}
                  className="button"
                  style={{
                    padding: "0.4rem 0.8rem",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "inherit"
                  }}
                >
                  {expandedProjects[project.title] ? "Hide Details" : "Details"}
                </button>
              </div>

              {/* The collapsible features bar */}
              {expandedProjects[project.title] && (
                <div style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #e5e7eb"
                }}>
                  <h4 style={{ marginTop: 0, marginBottom: "0.5rem" }}>Key Features</h4>
                  <ul style={{ paddingLeft: "1.2rem", margin: 0, color: "#596273", lineHeight: 1.6 }}>
                    {project.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

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
      </div>
    );
  };

  return (
    <section>
      <p className="eyebrow">Selected work</p>
      <h1 style={{ marginBottom: "3rem" }}>Projects</h1>

      {/* Render the three categories dynamically */}
      {renderCategory("Internship")}
      {renderCategory("Class")}
      {renderCategory("Personal")}

    </section>
  );
}