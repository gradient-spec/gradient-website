import { useEffect, useRef, useState } from 'react'

/*
  LoaderOverlay — liquid fill animation for "Gradient."
  
  Phases:
    0  idle        — overlay visible, logo invisible
    1  logo-in     — logo outline fades in (400ms)
    2  filling      — wave rises from 0 → 100% (2000ms)
    3  filled       — wave stills, glow appears, hold (300ms)
    4  exit         — logo scales down + moves to navbar position
    5  done         — overlay removed, page revealed
*/

const PHASE_DURATION = {
    LOGO_IN:  400,
    FILL:    2000,
    HOLD:     300,
    EXIT:     700,
}

export default function LoaderOverlay({ onComplete }) {
    const [phase, setPhase] = useState(0)   // 0=idle 1=logo-in 2=filling 3=filled 4=exit 5=done
    const overlayRef  = useRef(null)
    const logoRef     = useRef(null)
    const waveGroupRef = useRef(null)

    useEffect(() => {
        // Lock scroll during load
        document.body.style.overflow = 'hidden'

        let t1, t2, t3, t4, t5

        // Phase 1 — logo fade in (start immediately)
        t1 = setTimeout(() => setPhase(1), 50)

        // Phase 2 — begin wave fill
        t2 = setTimeout(() => setPhase(2), 50 + PHASE_DURATION.LOGO_IN)

        // Phase 3 — wave stills, glow
        t3 = setTimeout(() => setPhase(3),
            50 + PHASE_DURATION.LOGO_IN + PHASE_DURATION.FILL)

        // Phase 4 — exit animation
        t4 = setTimeout(() => setPhase(4),
            50 + PHASE_DURATION.LOGO_IN + PHASE_DURATION.FILL + PHASE_DURATION.HOLD)

        // Phase 5 — done, unlock scroll and notify parent
        t5 = setTimeout(() => {
            setPhase(5)
            document.body.style.overflow = ''
            onComplete?.()
        }, 50 + PHASE_DURATION.LOGO_IN + PHASE_DURATION.FILL + PHASE_DURATION.HOLD + PHASE_DURATION.EXIT)

        return () => {
            clearTimeout(t1); clearTimeout(t2)
            clearTimeout(t3); clearTimeout(t4); clearTimeout(t5)
            document.body.style.overflow = ''
        }
    }, [onComplete])

    if (phase === 5) return null

    const isExiting = phase === 4

    return (
        <div
            ref={overlayRef}
            className={`loader-overlay${isExiting ? ' loader-exit' : ''}`}
            aria-hidden="true"
        >
            <div
                ref={logoRef}
                className={[
                    'loader-logo',
                    phase >= 1 ? 'loader-logo--visible' : '',
                    phase >= 3 ? 'loader-logo--glow'    : '',
                    isExiting  ? 'loader-logo--exit'    : '',
                ].filter(Boolean).join(' ')}
            >
                <LogoSVG phase={phase} />
            </div>
        </div>
    )
}

/* ─── SVG Logo with liquid fill ──────────────────────────────────────────── */

function LogoSVG({ phase }) {
    /*
      Layout:
        • A hidden <text> defines the letter shapes via a <clipPath>
        • A <rect> filled with the gradient color, clipped to that path,
          acts as the "filled" layer
        • A wave <path> rides on top of that fill, also clipped
        • A separate visible <text> renders the outline (stroke only, no fill)
          so it stays on top throughout
    */

    const isFilling = phase === 2
    const isFilled  = phase >= 3
    const isExiting = phase === 4

    return (
        <svg
            className="loader-svg"
            viewBox="0 0 520 100"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
        >
            <defs>
                {/* Clip path — matches the text letterforms exactly */}
                <clipPath id="loader-text-clip">
                    <text
                        x="50%"
                        y="82"
                        textAnchor="middle"
                        fontFamily="'Playfair Display', serif"
                        fontSize="88"
                        fontWeight="700"
                        letterSpacing="0.5"
                    >
                        Gradient.
                    </text>
                </clipPath>

                {/* Blue → purple gradient for the liquid */}
                <linearGradient id="loader-liquid-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#A4CBEB" />
                    <stop offset="50%"  stopColor="#186275" />
                    <stop offset="100%" stopColor="#24015C" />
                </linearGradient>

                {/* Shimmer overlay gradient */}
                <linearGradient id="loader-shimmer-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="rgba(255,255,255,0)"   />
                    <stop offset="45%"  stopColor="rgba(255,255,255,0.06)"/>
                    <stop offset="55%"  stopColor="rgba(255,255,255,0.12)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"   />
                </linearGradient>
            </defs>

            {/* ── Liquid fill group, clipped to text shape ── */}
            <g clipPath="url(#loader-text-clip)">

                {/* Solid fill rectangle — rises from bottom */}
                <rect
                    className={[
                        'loader-fill-rect',
                        isFilling ? 'loader-fill-rect--rising' : '',
                        isFilled  ? 'loader-fill-rect--full'   : '',
                    ].filter(Boolean).join(' ')}
                    x="-20" y="0" width="560" height="100"
                    fill="url(#loader-liquid-grad)"
                />

                {/* Wave path — sits right at the top surface of the liquid */}
                <path
                    className={[
                        'loader-wave',
                        isFilling ? 'loader-wave--rising' : '',
                        isFilled  ? 'loader-wave--still'  : '',
                    ].filter(Boolean).join(' ')}
                    fill="url(#loader-liquid-grad)"
                />

                {/* Shimmer sheen on top of fill */}
                {(isFilling || isFilled) && (
                    <rect
                        className="loader-shimmer"
                        x="-20" y="0" width="560" height="100"
                        fill="url(#loader-shimmer-grad)"
                    />
                )}
            </g>

            {/* ── Outline text — always visible on top ── */}
            <text
                className={[
                    'loader-text-outline',
                    isFilled ? 'loader-text-outline--filled' : '',
                ].filter(Boolean).join(' ')}
                x="50%"
                y="82"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontSize="88"
                fontWeight="700"
                letterSpacing="0.5"
            >
                Gradient.
            </text>
        </svg>
    )
}
