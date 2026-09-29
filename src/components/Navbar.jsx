import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="brand" to="/">
          Portfolio
        </NavLink>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}