import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/products', label: 'Products' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/boards', label: 'Boards' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <svg viewBox="0 0 200 300" className="navbar-logo">
                        {/* Same path as loading screen SVG */}
                        <path
                            fill="url(#navbar-liquid-grad)"
                            d="M100 275 C60 275, 25 240, 25 185 C25 130, 55 82, 90 48 Q100 36, 107 22 Q115 36, 122 48 C155 82, 185 130, 185 185 C185 240, 148 275, 100 275 Z"
                        />
                        <path
                            fill="url(#navbar-liquid-grad)"
                            d="M107 20 C106 12, 108 5, 110 3 C112 1, 114 9, 113 17 Q110 23, 107 20 Z"
                        />
                        <defs>
                            <linearGradient id="navbar-liquid-grad" x1="0" y1="1" x2="0.3" y2="0">
                                <stop offset="0%" stopColor="#4a90d9" />
                                <stop offset="50%" stopColor="#6b78c4" />
                                <stop offset="100%" stopColor="#7b5ea7" />
                            </linearGradient>
                        </defs>
                    </svg>
                    Gradient<span>.</span>
                </Link>
                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={location.pathname === link.to ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button
                    className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    )
}
