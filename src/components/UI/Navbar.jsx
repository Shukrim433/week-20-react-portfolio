import '../../styles/Navbar.css';

export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <ul>
            {links.map((link, index) => 
              <a key={index}>{link}</a>  //  Each child in a list should have a unique "key" prop. ERROR-  <a> cannot appear as a descendant of
            )}
        </ul>
      </nav>
    );
  }