import AnimatedSection from '../components/AnimatedSection'

const products = [
    { icon: '⚡', title: 'GradientOS', desc: 'Open-source developer toolkit for project scaffolding, CI/CD, and deployment.', tags: ['TypeScript', 'CLI', 'Open Source'] },
    { icon: '🧠', title: 'NeuralSketch', desc: 'AI-powered whiteboard that converts hand-drawn diagrams to production-ready code.', tags: ['Python', 'React', 'AI/ML'] },
    { icon: '📊', title: 'DataPulse', desc: 'Real-time analytics dashboard for student organizations to track engagement metrics.', tags: ['Next.js', 'D3.js', 'PostgreSQL'] },
]

const projects = [
    { icon: '🗺️', title: 'CampusNav', desc: 'Indoor navigation system for our college campus using A* pathfinding and custom floor plans.', tags: ['React', 'FastAPI', 'SQLite'] },
    { icon: '🤖', title: 'GradBot', desc: 'Discord bot handling event reminders, code challenges, and member onboarding.', tags: ['Node.js', 'Discord.js'] },
    { icon: '🎨', title: 'DesignKit', desc: 'Component library and design tokens used across all Gradient projects.', tags: ['CSS', 'Figma', 'Storybook'] },
]

const openSource = [
    { icon: '📦', title: 'vite-plugin-gradient', desc: 'Vite plugin for automatic design token injection and theme switching.', tags: ['Vite', 'Plugin', '300+ ★'] },
    { icon: '🔧', title: 'eslint-config-gradient', desc: 'Our opinionated ESLint config for consistent, clean JavaScript and TypeScript.', tags: ['ESLint', 'Config', '150+ ★'] },
    { icon: '🧪', title: 'test-utils', desc: 'Lightweight testing utilities for React components with zero configuration.', tags: ['Testing', 'React', '200+ ★'] },
]

function ProductSection({ label, title, subtitle, items, delay = 0, bg = false }) {
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
                            <div key={i} className="card product-card">
                                <div className="product-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="product-tags">
                                    {item.tags.map((tag, j) => (
                                        <span key={j} className="product-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

export default function Products() {
    return (
        <>
            <div className="page-header">
                <span className="page-label">Products & Projects</span>
                <h1>What We Build</h1>
                <p>From open-source tools to full-scale products — here's what Gradient members have created.</p>
            </div>

            <ProductSection label="Products" title="Flagship Products" subtitle="Polished tools built and maintained by Gradient." items={products} delay={200} />
            <ProductSection label="Projects" title="Active Projects" subtitle="Ongoing initiatives by our teams." items={projects} delay={200} bg />
            <ProductSection label="Open Source" title="Open Source Contributions" subtitle="Free tools we've shared with the community." items={openSource} delay={200} />
        </>
    )
}
