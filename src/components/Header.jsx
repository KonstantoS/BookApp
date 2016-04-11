import React from 'react'
import { Link } from 'react-router'
const Header = () => (
    <header className="header">
            <div className="centered container block">
                <Link to="/" className="header_logo">BookZzz</Link>
                <nav className="header_menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books/">Books</Link></li>
                    <li><Link to="/authors/">Authors</Link></li>
                </nav>
            </div>
    </header>
);
export default Header;