import '../../styles/Navbar.css';

export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <ul>
            {links.map((link) => 
              <a>{link}</a>
            )}
        </ul>
      </nav>
    );
  }