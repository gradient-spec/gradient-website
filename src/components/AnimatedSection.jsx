import { useEffect, useRef, Children, cloneElement, isValidElement } from 'react'

const directionClass = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    fade: 'reveal-fade',
    scale: 'reveal-scale',
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up', stagger = false }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add('visible')
                    }, delay)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.12 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    const revealCls = directionClass[direction] || 'reveal'

    // If stagger is enabled, inject --stagger-index CSS var on each direct child
    const staggeredChildren = stagger
        ? Children.map(children, (child, i) =>
            isValidElement(child)
                ? cloneElement(child, {
                    style: { ...child.props.style, '--stagger-index': i },
                })
                : child
        )
        : children

    return (
        <div ref={ref} className={`${revealCls} ${className}`}>
            {staggeredChildren}
        </div>
    )
}

