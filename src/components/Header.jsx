import { Link } from 'react-router-dom'; //**
import Navbar from './UI/Navbar';
import '../styles/Header.css';

export default function Header() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <header className="header">
           <h1>Shukri Mohamed</h1>
            <Navbar
                links={[  // passes an array of these link components to the navbar comp to display
                <Link key={1} className="nav-link" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link" to="/contact"> 
                    Contact Me
                </Link>,
                <Link key={4} className="nav-link" to="/resume"> 
                    Resume
                </Link>,
                ]}
            />
       </header>
    );
  }



// Link - component from react dom that essentially acts as an anchor tag, allows you to navigate between pages and update URL