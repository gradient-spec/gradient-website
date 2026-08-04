import AnimatedSection from '../components/AnimatedSection'

const awards = [
    { icon: '🏆', title: 'National Hackathon Champions 2026', desc: 'First place at the National Collegiate Hackathon, competing against 500+ teams.' },
    { icon: '🥇', title: 'Best Technical Club 2025', desc: 'Awarded Best Technical Club by our university for outstanding contributions and events.' },
    { icon: '🌟', title: 'GitHub Stars — 1000+ Total', desc: 'Our open-source projects have collectively crossed 1000+ stars on GitHub.' },
]

const competitions = [
    { icon: '💻', title: 'ICPC Regionals 2025', desc: 'Three teams qualified for ICPC Asia Regionals. One team advanced to the Super Regionals.' },
    { icon: '🧩', title: 'Google Code Jam 2025', desc: 'Five members qualified for Round 2, with two advancing to Round 3.' },
    { icon: '🏅', title: 'Smart India Hackathon 2025', desc: 'Winners of the SIH 2025 grand finale in the AI/ML problem statement category.' },
]

const milestones = [
    { icon: '🎓', title: '150+ Active Members', desc: 'Grown from 12 founders to 150+ active, contributing members across all years.' },
    { icon: '📝', title: '5 Research Papers Published', desc: 'Members have published in peer-reviewed journals and conferences in AI, systems, and HCI.' },
    { icon: '🤝', title: '10+ Industry Partners', desc: 'Partnerships with companies like Microsoft, Google, and AWS for workshops and sponsorships.' },
    { icon: '📜', title: '2 Patents Filed', desc: 'Two innovative projects led to patent filings in India, both currently under review.' },
]

function AchievementSection({ label, title, subtitle, items, delay = 0, bg = false }) {
    return (
        <section className="section" style={bg ? { background: 'var(--bg-secondary)' } : {}}>
            <div className="container">
                <AnimatedSection>
                    <div className="section-heading">
                        <span className="section-label">{label}</span>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={delay}>
                    <div className="grid-3">
                        {items.map((item, i) => (
                            <div key={i} className="card achievement-card">
                                <div className="achievement-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

export default function Achievements() {
    return (
        <>
            <div className="page-header">
                <span className="page-label">Achievements</span>
                <h1>Our Proudest Moments</h1>
                <p>Recognitions, wins, and milestones that define our journey.</p>
            </div>

            <AchievementSection label="Awards" title="Awards & Recognitions" subtitle="Honors we've earned along the way." items={awards} delay={200} />
            <AchievementSection label="Competitions" title="Competition Highlights" subtitle="Battles we've fought and won." items={competitions} delay={200} bg />
            <AchievementSection label="Milestones" title="Key Milestones" subtitle="Numbers that tell our story." items={milestones} delay={200} />
        </>
    )
}
