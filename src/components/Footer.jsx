import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">Gradient<span>.</span></div>
                        <p className="footer-desc">
                            A premium technical community pushing the boundaries of innovation, credibility, and craftsmanship.
                        </p>
                    </div>
                    <div className="footer-column">
                        <h4>Navigate</h4>
                        <Link to="/about">About</Link>
                        <Link to="/events">Events</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/achievements">Achievements</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Community</h4>
                        <Link to="/boards">Boards</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="#" target="_blank" rel="noopener noreferrer">Blog</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Careers</a>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gradient Club. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="#" target="_blank" rel="noopener noreferrer">GH</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LI</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">TW</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
