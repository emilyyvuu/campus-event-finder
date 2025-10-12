import { Link, useLocation } from "react-router-dom";
import "../styles/layout.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/" || pathname === "/home";

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">Event Finder</Link>

      <div className="nav-buttons">
        {onHome && (
                  <>
                    <Link className="nav-button" to="/events">Events</Link>
                    <Link className="login-button" to="/login">Login</Link>
                  </>
                )}
      </div>
    </nav>
  );
}
