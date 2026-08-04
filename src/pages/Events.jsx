import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const events = {
    upcoming: [
        { date: 'Aug 15, 2026', tag: 'Hackathon', title: 'GradientHacks 3.0', desc: '48-hour hackathon with 200+ developers. Build, pitch, win. Prizes worth ₹5,00,000.' },
        { date: 'Sep 5, 2026', tag: 'Workshop', title: 'Rust for Systems Programming', desc: 'A hands-on deep dive into Rust, covering memory safety, ownership, and building real CLI tools.' },
        { date: 'Sep 20, 2026', tag: 'Talk', title: 'AI Ethics Panel', desc: 'Industry experts discuss the ethical implications of AI in healthcare, education, and governance.' },
    ],
    ongoing: [
        { date: 'Jul–Aug 2026', tag: 'Program', title: 'Summer of Code', desc: 'An 8-week mentorship program pairing junior members with senior developers on real-world projects.' },
        { date: 'Year-round', tag: 'Community', title: 'Weekly Code Reviews', desc: 'Every Friday, members present and review each other\'s code for quality, architecture, and best practices.' },
    ],
    past: [
        { date: 'Mar 2026', tag: 'Hackathon', title: 'GradientHacks 2.5 — Mini', desc: 'A 12-hour internal hackathon focused on solving campus problems. 15 teams participated.' },
        { date: 'Feb 2026', tag: 'Workshop', title: 'Intro to WebAssembly', desc: 'A beginner-friendly workshop on WASM, its use cases, and hands-on exercises with AssemblyScript.' },
        { date: 'Jan 2026', tag: 'Competition', title: 'Algorithm Arena', desc: 'A competitive programming contest with problems ranging from dynamic programming to graph theory.' },
        { date: 'Dec 2025', tag: 'Talk', title: 'Scaling Microservices', desc: 'Guest lecture by an industry veteran on scaling distributed systems at production scale.' },
    ],
}

const galleryItems = [
    'GradientHacks 2.0 — Opening Ceremony',
    'Workshop — Building with Rust',
    'Team Bonding Retreat 2025',
    'Award Ceremony — National Champions',
    'Summer of Code Kickoff',
    'Weekly Code Review Session',
]

const tabs = ['upcoming', 'ongoing', 'past']

export default function Events() {
    const [activeTab, setActiveTab] = useState('upcoming')

    return (
        <>
            <div className="page-header">
                <span className="page-label">Events</span>
                <h1>What's Happening</h1>
                <p>Workshops, hackathons, talks, and more — there's always something brewing at Gradient.</p>
            </div>

            <section className="section">
                <div className="container">
                    <div className="tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <AnimatedSection key={activeTab}>
                        <div className="grid-3">
                            {events[activeTab].map((event, i) => (
                                <div key={i} className="card event-card">
                                    <div className="event-date">{event.date}</div>
                                    <div className="event-tag">{event.tag}</div>
                                    <h3>{event.title}</h3>
                                    <p>{event.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Gallery */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Memories</span>
                            <h2>Event Gallery</h2>
                            <p>Moments from our journey together.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="gallery-grid">
                            {galleryItems.map((item, i) => (
                                <div key={i} className="gallery-item">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
