import { useState, useRef, useCallback } from 'react'

const defaultEvents = [
    {
        id: 'evt-01',
        name: 'GradientHacks 3.0',
        category: 'Flagship Hackathon',
        date: 'Aug 15–17, 2026',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
        desc: '48-hour flagship sprint bringing together 200+ developers, designers, and visionaries.',
    },
    {
        id: 'evt-02',
        name: 'Rust Systems Sprint',
        category: 'Engineering Workshop',
        date: 'Sep 05, 2026',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
        desc: 'Hands-on deep dive into memory safety, concurrent runtimes, and low-level CLI tools.',
    },
    {
        id: 'evt-03',
        name: 'AI Ethics & Alignment',
        category: 'Symposium',
        date: 'Sep 20, 2026',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
        desc: 'Leading researchers discuss governance, safety benchmarks, and foundational AI models.',
    },
    {
        id: 'evt-04',
        name: 'Algorithm Arena IV',
        category: 'Competitive Programming',
        date: 'Oct 10, 2026',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
        desc: 'Fast-paced algorithmic battle covering graph theory, dynamic programming, and math.',
    },
    {
        id: 'evt-05',
        name: 'Open Source Demo Day',
        category: 'Product Showcase',
        date: 'Nov 02, 2026',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        desc: 'Exhibiting student-built developer tools, open-source frameworks, and production hardware.',
    },
]

export default function EventStackSection({
    title = 'Featured Events & Sprints',
    label = 'Curated Index',
    items = defaultEvents,
    defaultActiveIndex = 1,
}) {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)
    const [dealingIndex, setDealingIndex] = useState(null)
    const [isLocked, setIsLocked] = useState(false)
    const timerRef = useRef(null)

    const handleSelect = useCallback((targetIdx) => {
        if (targetIdx === activeIndex || isLocked) return
        setIsLocked(true)

        // Phase 1: mark the current top card as "dealing" — CSS will slide it out
        setDealingIndex(activeIndex)

        if (timerRef.current) clearTimeout(timerRef.current)

        // Phase 2: after slide-out animation, swap the active index
        timerRef.current = setTimeout(() => {
            setActiveIndex(targetIdx)
            setDealingIndex(null)
            setIsLocked(false)
        }, 600)
    }, [activeIndex, isLocked])

    // Compute each card's depth in the stack relative to activeIndex
    const getDepth = (itemIdx) => {
        const n = items.length
        // Circular distance from activeIndex
        let dist = (itemIdx - activeIndex + n) % n
        return dist
    }

    return (
        <section className="event-stack-section">
            <div className="event-stack-container">
                <div className="event-stack-header">
                    <span className="event-stack-label">{label}</span>
                    <h2 className="event-stack-title">{title}</h2>
                </div>

                <div className="event-stack-grid">
                    {/* Left: Name list */}
                    <div className="event-stack-list-col">
                        <ul className="event-stack-list" role="tablist" aria-label="Events Menu">
                            {items.map((item, idx) => {
                                const isActive = idx === activeIndex
                                const pad = String(idx + 1).padStart(2, '0')
                                return (
                                    <li key={item.id} className="event-stack-item-wrap">
                                        <div
                                            role="tab"
                                            tabIndex={0}
                                            aria-selected={isActive}
                                            className={`event-stack-item ${isActive ? 'active' : ''}`}
                                            onMouseEnter={() => handleSelect(idx)}
                                            onClick={() => handleSelect(idx)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault()
                                                    handleSelect(idx)
                                                }
                                            }}
                                        >
                                            <div className="event-stack-item-main">
                                                <span className="event-stack-index">({pad})</span>
                                                <span className="event-stack-name">{item.name}</span>
                                            </div>
                                            {item.date && <span className="event-stack-meta">{item.date}</span>}
                                            <div className="event-stack-line" />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Right: Physical card stack */}
                    <div className="event-stack-photo-col">
                        <div className="photo-stack-stage">
                            {items.map((item, idx) => {
                                const depth = getDepth(idx)
                                const isDealing = idx === dealingIndex
                                const isTop = depth === 0 && !isDealing

                                // Build class name based on depth
                                let depthClass = 'stack-hidden'
                                if (depth === 0) depthClass = 'stack-top'
                                else if (depth === 1) depthClass = 'stack-second'
                                else if (depth === 2) depthClass = 'stack-third'

                                return (
                                    <div
                                        key={item.id}
                                        className={`psc ${depthClass} ${isDealing ? 'dealing-out' : ''}`}
                                    >
                                        <div className="photo-polaroid-frame">
                                            <div className="photo-image-wrap">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="photo-img-element"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="photo-card-caption" style={{ opacity: isTop ? 1 : 0, transition: 'opacity 250ms ease' }}>
                                                <div className="photo-caption-top">
                                                    <span className="photo-tag-badge">{item.category}</span>
                                                    {item.date && <span className="photo-date-text">{item.date}</span>}
                                                </div>
                                                <h3 className="photo-caption-name">{item.name}</h3>
                                                {item.desc && <p className="photo-caption-desc">{item.desc}</p>}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
