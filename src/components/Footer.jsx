import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-wrapper">
                {/* Top Links Section */}
                <div className="footer-top">
                    {/* Company & Help Navigation */}
                    <div className="footer-brand-links">
                        <div className="footer-col">
                            <h4 className="footer-col-header">Company</h4>
                            <ul className="footer-link-list">
                                <li>
                                    <Link to="/" className="footer-link highlighted">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="footer-link">About</Link>
                                </li>
                                <li>
                                    <Link to="/events" className="footer-link">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/products" className="footer-link">Pricing</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col help-col">
                            <h4 className="footer-col-header">Help</h4>
                            <ul className="footer-link-list">
                                <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                                <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                                <li><a href="#subprocessors" className="footer-link">Subprocessors</a></li>
                                <li><a href="#security" className="footer-link">Security</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Vertical Divider Line */}
                    <div className="footer-vertical-divider" />

                    {/* Feature & Category Links */}
                    <div className="footer-feature-links">
                        <div className="footer-grid-4col">
                            <div className="footer-col">
                                <ul className="footer-link-list muted">
                                    <li><a href="#code-output" className="footer-link">Code Output</a></li>
                                    <li><a href="#code-quality" className="footer-link">Code Quality</a></li>
                                    <li><a href="#code-reviews" className="footer-link">Code Reviews</a></li>
                                    <li><a href="#ai-health" className="footer-link">AI Health</a></li>
                                    <li><a href="#silk-1" className="footer-link">Silk 1</a></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <ul className="footer-link-list muted">
                                    <li><a href="#ai-roi" className="footer-link">AI ROI</a></li>
                                    <li><a href="#ai-insights" className="footer-link">AI Insights</a></li>
                                    <li><a href="#ai-usage" className="footer-link">AI Usage</a></li>
                                    <li><a href="#agent-observability" className="footer-link">Agent Observability</a></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <ul className="footer-link-list muted">
                                    <li><a href="#measuring-impact" className="footer-link">Measuring AI Impact</a></li>
                                    <li><a href="#measuring-usage" className="footer-link">Measuring AI Usage</a></li>
                                    <li><a href="#claude-analytics" className="footer-link">Claude Code Analytics</a></li>
                                    <li><a href="#cursor-analytics" className="footer-link">Cursor Analytics</a></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <ul className="footer-link-list muted">
                                    <li><a href="#vs-dx" className="footer-link">Gradient vs DX</a></li>
                                    <li><a href="#vs-jellyfish" className="footer-link">Gradient vs Jellyfish</a></li>
                                    <li><a href="#vs-linearb" className="footer-link">Gradient vs LinearB</a></li>
                                    <li><a href="#vs-swarmia" className="footer-link">Gradient vs Swarmia</a></li>
                                    <li><a href="#vs-span" className="footer-link">Gradient vs Span</a></li>
                                    <li><a href="#vs-waydev" className="footer-link">Gradient vs Waydev</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Sub-row under features */}
                        <div className="footer-sub-grid">
                            <div className="footer-col">
                                <h4 className="footer-col-header">Wooly</h4>
                                <p className="footer-sub-text">AI engineering agent.</p>
                            </div>

                            <div className="footer-col">
                                <h4 className="footer-col-header inline-badge">
                                    Gradient Router <span className="badge-purple">NEW</span>
                                </h4>
                                <p className="footer-sub-text">#1 Ranked Prompt Router In the World</p>
                            </div>

                            <div className="footer-col">
                                <h4 className="footer-col-header">Reporting</h4>
                                <ul className="footer-link-list muted">
                                    <li><a href="#dora" className="footer-link">DORA & Benchmarks</a></li>
                                    <li><a href="#finops" className="footer-link">Dev FinOps</a></li>
                                </ul>
                            </div>

                            <div className="footer-col">
                                <h4 className="footer-col-header">Socials</h4>
                                <ul className="footer-link-list muted">
                                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
                                    <li><a href="https://x.com" target="_blank" rel="noreferrer" className="footer-link">X</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Giant Wordmark Display matching exact weave paper texture finish */}
                <div className="footer-wordmark-container">
                    <h1 className="footer-giant-wordmark">Gradient</h1>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        Gradient © {new Date().getFullYear()}
                    </div>
                    <div className="footer-assembly">
                        Assembly By Luca
                    </div>
                </div>
            </div>
        </footer>
    )
}
