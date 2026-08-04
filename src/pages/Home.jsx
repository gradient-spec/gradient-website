import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const stats = [
    { number: '150+', label: 'Members' },
    { number: '40+', label: 'Events' },
    { number: '25+', label: 'Projects' },
    { number: '15+', label: 'Awards' },
]

const boardMembers = [
    { name: 'Anusha', role: 'President', initials: 'A' },
    { name: 'Pranathi', role: 'Vice President', initials: 'P' },
    { name: 'Suraj', role: 'Secratery', initials: 'S' },
    { name: 'Rakesh', role: 'Joint Secratery', initials: 'R' },
]

// 4 fixed positions: front (bottom), right, top (back), left
// Cards rotate clockwise through these slots
const SLOTS = [
    { x: 0, y: 130, scale: 1.1, zIndex: 4 }, // front (bottom-center)
    { x: 440, y: -40, scale: 0.75, zIndex: 2 }, // right
    { x: 0, y: -180, scale: 0.65, zIndex: 1 }, // top (back)
    { x: -440, y: -40, scale: 0.75, zIndex: 2 }, // left
]

export default function Home() {
    const [step, setStep] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    // Auto-cycle every 3 seconds
    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(() => {
            setStep(prev => prev + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [isPaused])

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
            </section>

            {/* What is Gradient */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">About Us</span>
                            <h2>What is Gradient?</h2>
                            <p>
                                Gradient is a premier technical club dedicated to fostering innovation through hands-on projects, competitive programming, open-source contributions, and cutting-edge research. We believe in learning by building.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Statistics */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="grid-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="card stat-card">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Current Board */}
            <section
                className="section board-showcase"
                style={{ background: 'var(--bg-secondary)' }}
            >
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Leadership</span>
                            <h2>Current Board</h2>
                            <p>The minds driving Gradient forward this year.</p>
                        </div>
                    </AnimatedSection>
                </div>
                <div
                    className="carousel-stage"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {boardMembers.map((m, i) => {
                        const slotIndex = ((i + step) % 4 + 4) % 4
                        const slot = SLOTS[slotIndex]
                        const isFront = slotIndex === 0

                        return (
                            <div
                                key={i}
                                className={`carousel-card ${isFront ? 'front-card' : 'back-card'}`}
                                style={{
                                    transform: `translate(${slot.x}px, ${slot.y}px) scale(${slot.scale})`,
                                    zIndex: slot.zIndex,
                                }}
                            >
                                <div className="portrait-image">
                                    <div className="portrait-placeholder" />
                                    <div className="portrait-initial">{m.initials}</div>
                                </div>
                                <div className="portrait-overlay" />
                                <div className="portrait-info">
                                    <h3 className="portrait-name">{m.name}</h3>
                                    <div className="portrait-divider" />
                                    <span className="portrait-role">{m.role}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Featured Event */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Upcoming</span>
                            <h2>Featured Event</h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="card" style={{ maxWidth: '700px', margin: '0 auto', padding: 'var(--sp-7)' }}>
                            <div className="event-date">August 15, 2026</div>
                            <div className="event-tag">Hackathon</div>
                            <h3>GradientHacks 3.0</h3>
                            <p style={{ marginBottom: 'var(--sp-5)' }}>
                                Our flagship 48-hour hackathon bringing together 200+ developers, designers, and innovators to build the next big thing. Prizes worth ₹5,00,000.
                            </p>
                            <Link to="/events" className="btn btn-primary">Learn More</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>


            {/* Latest Achievement */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Recognition</span>
                            <h2>Latest Achievement</h2>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="card achievement-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <div className="achievement-icon">🏆</div>
                            <h3>National Hackathon Champions 2026</h3>
                            <p>
                                Team Gradient secured first place at the National Collegiate Hackathon, competing against 500+ teams from across the country.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
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
