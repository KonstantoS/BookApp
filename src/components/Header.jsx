import React from 'react'
import { Link } from 'react-router'
export default () => (
    <header className="header">
        <div className="container">
            <div className="container block">
                <Link to="/" className="header_logo">BookZzz</Link>
                <nav className="header_menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books/">Books</Link></li>
                    <li><Link to="/authors/">Authors</Link></li>
                </nav>
            </div>
        </div>
    </header>
);