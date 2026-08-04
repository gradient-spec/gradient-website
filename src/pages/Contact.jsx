import AnimatedSection from '../components/AnimatedSection'
import { Link } from 'react-router-dom'

const socials = [
    { icon: '🐙', name: 'GitHub', handle: '@gradient-club', url: '#' },
    { icon: '💼', name: 'LinkedIn', handle: 'Gradient Club', url: '#' },
    { icon: '🐦', name: 'Twitter', handle: '@gradientclub', url: '#' },
    { icon: '📸', name: 'Instagram', handle: '@gradient.club', url: '#' },
    { icon: '💬', name: 'Discord', handle: 'Gradient Server', url: '#' },
    { icon: '📧', name: 'Email', handle: 'hello@gradient.club', url: 'mailto:hello@gradient.club' },
]

export default function Contact() {
    return (
        <>
            <div className="page-header">
                <span className="page-label">Get in Touch</span>
                <h1>Contact Us</h1>
                <p>Have a question, idea, or just want to say hello? We'd love to hear from you.</p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'start' }}>
                        {/* Contact Form */}
                        <AnimatedSection>
                            <div className="card" style={{ padding: 'var(--sp-7)' }}>
                                <h3 style={{ marginBottom: 'var(--sp-5)' }}>Send a Message</h3>
                                <form className="contact-form" onSubmit={e => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" placeholder="Your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="you@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" placeholder="What's on your mind?" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>

                        {/* Social Links */}
                        <AnimatedSection delay={200}>
                            <div>
                                <h3 style={{ marginBottom: 'var(--sp-5)' }}>Find Us Online</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                                    {socials.map((s, i) => (
                                        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="card social-card">
                                            <div className="social-icon">{s.icon}</div>
                                            <div>
                                                <div className="social-name">{s.name}</div>
                                                <div className="social-handle">{s.handle}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="cta-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <h2>Want to Join Gradient?</h2>
                        <p>
                            We're always looking for passionate builders, thinkers, and creators. Applications open every semester.
                        </p>
                        <Link to="/about" className="btn btn-primary btn-lg">Learn About Us</Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
