import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import EventStackSection from '../components/EventStackSection'
import { Link } from 'react-router-dom'

const stats = [
    { number: '150+', label: 'Members' },
    { number: '40+', label: 'Events' },
    { number: '25+', label: 'Projects' },
    { number: '15+', label: 'Awards' },
]

const boardMembers = [
    {
        name: 'Anusha',
        role: 'President',
        initials: 'A',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
        bio: 'Leading technical strategy, club vision, and community growth.'
    },
    {
        name: 'Pranathi',
        role: 'Vice President',
        initials: 'P',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
        bio: 'Directing club operations, events, and corporate relations.'
    },
    {
        name: 'Suraj',
        role: 'Secretary',
        initials: 'S',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        bio: 'Managing project timelines, team coordination, and communications.'
    },
    {
        name: 'Rakesh',
        role: 'Joint Secretary',
        initials: 'R',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        bio: 'Overseeing member drives, workshop logistics, and onboarding.'
    },
    {
        name: 'Arjun Mehta',
        role: 'Tech Lead',
        initials: 'AM',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
        bio: 'Architecting open source projects and hackathon systems.'
    },
    {
        name: 'Ananya Iyer',
        role: 'Design Lead',
        initials: 'AI',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
        bio: 'Crafting UI design systems and aesthetic brand guidelines.'
    }
]

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Auto-rotate 3D orbit every 6s for a relaxed, visible transition
    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % boardMembers.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [isPaused])

    const handlePrev = () => {
        setActiveIndex(prev => (prev - 1 + boardMembers.length) % boardMembers.length)
    }

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % boardMembers.length)
    }

    return (
        <>
            {/* Hero */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-label">Welcome to Gradient</span>
                    <h1>
                        Where Ideas Meet<br />
                        <span className="highlight">Innovation</span>
                    </h1>
                    <p>
                        A community of builders, thinkers, and creators pushing the boundaries of technology. We craft, we compete, we innovate — together.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary btn-lg">Join Gradient</Link>
                        <Link to="/about" className="btn btn-secondary btn-lg">Learn More</Link>
                    </div>
                </div>
                <div className="hero-scroll-hint">
                    <span>Scroll</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* What is Gradient */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection direction="scale">
                        <div className="section-heading" style={{ maxWidth: '840px' }}>
                            <span className="section-label">About Us</span>
                            <h2>What is Gradient?</h2>
                            <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)', color: 'var(--text-primary)' }}>
                                Gradient is a premier technical club dedicated to fostering innovation through hands-on projects, competitive programming, open-source contributions, and cutting-edge research. We believe in learning by building.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Thin section divider */}
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)' }} />

            {/* Statistics */}
            <section className="section">
                <div className="container">
                    <AnimatedSection stagger direction="up">
                        <div className="grid-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-card" style={{ '--stagger-index': i }}>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Current Board — 3D Perspective Carousel */}
            <section
                className="section board-showcase"
                style={{ background: 'var(--bg-secondary)' }}
            >
                <div className="container">
                    <AnimatedSection direction="scale">
                        <div className="section-heading">
                            <span className="section-label">Leadership</span>
                            <h2>Current Board</h2>
                            <p>The minds driving Gradient forward this year.</p>
                        </div>
                    </AnimatedSection>
                </div>

                <div
                    className="orbit-stage-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="orbit-stage">
                        {boardMembers.map((m, i) => {
                            const N = boardMembers.length;
                            const angle = ((i - activeIndex) * (2 * Math.PI / N));

                            const Rx = isMobile ? 140 : 440;
                            const Ry = isMobile ? 60 : 130;
                            const Rz = 300;

                            const x = Math.sin(angle) * Rx;
                            const y = -Math.cos(angle) * Ry + (Ry * 0.4);
                            const z = Math.cos(angle) * Rz;

                            const depthFactor = (z + Rz) / (2 * Rz);
                            const scale = 0.72 + (depthFactor * 0.43);
                            const opacity = 0.45 + (depthFactor * 0.55);
                            const zIndex = Math.round(depthFactor * 20) + 1;
                            const blur = Math.max(0, (1 - depthFactor) * 4);
                            const isFront = i === activeIndex;

                            return (
                                <div
                                    key={i}
                                    className={`orbit-card ${isFront ? 'front-card' : 'back-card'}`}
                                    onClick={() => setActiveIndex(i)}
                                    style={{
                                        transform: `translate3d(${x}px, ${y}px, 0px) scale(${scale})`,
                                        zIndex: zIndex,
                                        opacity: opacity,
                                        filter: `blur(${blur}px)`,
                                        transition: 'transform 2.2s cubic-bezier(0.34, 1.25, 0.64, 1), opacity 2.2s ease-in-out, filter 2.2s ease-in-out',
                                    }}
                                >
                                    <div className="portrait-image">
                                        <img src={m.image} alt={m.name} loading="lazy" />
                                    </div>
                                    <div className="portrait-overlay" />
                                    <div className="portrait-info">
                                        <div className="portrait-badge">{m.role}</div>
                                        <h3 className="portrait-name">{m.name}</h3>
                                        <p className="portrait-bio">{m.bio}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Orbit Navigation Controls */}
                    <div className="orbit-controls">
                        <button
                            className="orbit-nav-btn prev"
                            onClick={handlePrev}
                            aria-label="Previous member"
                        >
                            ‹
                        </button>
                        <div className="orbit-dots">
                            {boardMembers.map((_, i) => (
                                <button
                                    key={i}
                                    className={`orbit-dot ${i === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Go to board member ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="orbit-nav-btn next"
                            onClick={handleNext}
                            aria-label="Next member"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Events — Warm White Photo Stack Index Section */}
            <EventStackSection />

            {/* Thin section divider */}
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)' }} />


            {/* Latest Achievement */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <AnimatedSection delay={150} direction="scale">
                            <div className="card achievement-card">
                                <div className="achievement-icon">🏆</div>
                                <h3>National Hackathon Champions 2026</h3>
                                <p>
                                    Team Gradient secured first place at the National Collegiate Hackathon, competing against 500+ teams from across the country.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right">
                            <div className="section-heading" style={{ marginBottom: 0 }}>
                                <span className="section-label">Recognition</span>
                                <h2>Latest Achievement</h2>
                                <p style={{ marginTop: 'var(--sp-4)' }}>
                                    Consistently pushing standard technical boundaries at top national and international stages.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection direction="fade">
                        <h2>Ready to Build Something Extraordinary?</h2>
                        <p>Join a community of passionate builders and make your mark on the future of technology.</p>
                        <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                            <Link to="/products" className="btn btn-secondary btn-lg">View Our Work</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
