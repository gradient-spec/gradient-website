import AnimatedSection from '../components/AnimatedSection'

const values = [
    { icon: '💡', title: 'Innovation', desc: 'We push boundaries and explore the unexplored, turning wild ideas into working prototypes.' },
    { icon: '🤝', title: 'Collaboration', desc: 'Great things are built together. We thrive on teamwork, mentorship, and shared knowledge.' },
    { icon: '🎯', title: 'Excellence', desc: 'From code quality to design, we hold ourselves to the highest standards in everything we create.' },
    { icon: '🌱', title: 'Growth', desc: 'Continuous learning is our core. Every member grows through challenges, workshops, and real projects.' },
]

const timeline = [
    { year: '2018', title: 'The Beginning', desc: 'Gradient was founded by a group of 12 passionate students with a vision to create a technical community unlike any other.' },
    { year: '2019', title: 'First Hackathon', desc: 'Organized GradientHacks 1.0 with 80+ participants, establishing ourselves as a serious force in the college tech scene.' },
    { year: '2020', title: 'Going Digital', desc: 'Pivoted to virtual events and online workshops. Grew membership by 200% through remote accessibility.' },
    { year: '2021', title: 'Open Source Push', desc: 'Launched our first open-source projects. Three repos crossed 500+ stars on GitHub within the year.' },
    { year: '2022', title: 'National Recognition', desc: 'Won our first national-level hackathon and were featured in leading tech publications.' },
    { year: '2023', title: 'Research & Patents', desc: 'Published 5 research papers and filed 2 patents. Established partnerships with industry leaders.' },
    { year: '2024', title: 'GradientHacks 2.0', desc: 'Our flagship hackathon grew to 300+ participants with sponsors from top tech companies.' },
    { year: '2025', title: '150+ Members Strong', desc: 'Crossed 150 active members, launched mentorship programs, and expanded into AI/ML research.' },
]

export default function About() {
    return (
        <>
            <div className="page-header">
                <span className="page-label">About Gradient</span>
                <h1>Our Story</h1>
                <p>From a small group of dreamers to a thriving technical community — this is our journey.</p>
            </div>

            {/* Mission / Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        <AnimatedSection direction="left">
                            <div className="card" style={{ padding: 'var(--sp-7)' }}>
                                <h3 style={{ marginBottom: 'var(--sp-3)', color: 'var(--glow)' }}>Our Mission</h3>
                                <p>
                                    To cultivate a community of technically excellent individuals who build impactful products, contribute to open source, and push the frontiers of computer science through collaboration and hands-on learning.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={150} direction="right">
                            <div className="card" style={{ padding: 'var(--sp-7)' }}>
                                <h3 style={{ marginBottom: 'var(--sp-3)', color: 'var(--glow)' }}>Our Vision</h3>
                                <p>
                                    To be recognized as a world-class student-run technical organization that produces industry-ready engineers, meaningful open-source contributions, and groundbreaking research.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Principles</span>
                            <h2>Our Values</h2>
                            <p>The principles that guide everything we do.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200} stagger>
                        <div className="grid-4">
                            {values.map((v, i) => (
                                <div key={i} className="card value-card">
                                    <div className="value-icon">{v.icon}</div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Timeline */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-heading">
                            <span className="section-label">Journey</span>
                            <h2>Our Timeline</h2>
                            <p>Key milestones in Gradient's evolution.</p>
                        </div>
                    </AnimatedSection>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div className="timeline">
                            {timeline.map((item, i) => (
                                <AnimatedSection key={i} delay={i * 100}>
                                    <div className="timeline-item">
                                        <div className="timeline-year">{item.year}</div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
