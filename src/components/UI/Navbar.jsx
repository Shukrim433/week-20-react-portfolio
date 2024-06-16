export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <ul>
            {links.map((link) => link)}
        </ul>
      </nav>
    );
  }