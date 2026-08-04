import { useEffect, useRef, useState } from 'react'

/* ---- SVG path data for the club flame/diya logo ---- */
const OUTER_FLAME =
    'M100 275 C60 275, 25 240, 25 185 C25 130, 55 82, 90 48 Q100 36, 107 22 Q115 36, 122 48 C155 82, 185 130, 185 185 C185 240, 148 275, 100 275 Z'
const TOP_DROPLET =
    'M107 20 C106 12, 108 5, 110 3 C112 1, 114 9, 113 17 Q110 23, 107 20 Z'
const INNER_CURVE = 'M110 22 C102 55, 78 85, 78 120 C78 160, 100 200, 95 245'
const INNER_LEAF =
    'M132 125 C150 148, 150 182, 128 200 C118 178, 114 148, 132 125 Z'
const EYE_SHAPE =
    'M126 165 C132 157, 143 157, 148 165 C143 173, 132 173, 126 165 Z'

/* ---- Wave-path generator ---- */
function wavePath(waterLevel, time, amplitude) {
    let d = `M -10 310 L -10 ${waterLevel}`
    for (let x = -10; x <= 210; x += 4) {
        const y =
            waterLevel +
            Math.sin(x * 0.04 + time * 0.003) * amplitude * 0.6 +
            Math.sin(x * 0.025 - time * 0.002) * amplitude * 0.4
        d += ` L ${x} ${y.toFixed(1)}`
    }
    d += ' L 210 310 Z'
    return d
}

/* ============================================================
   LoadingScreen
   ============================================================
   Phase timeline (ms):
     0 –  400  fadein   Logo outline fades in
   400 – 2400  filling  Liquid wave rises from bottom → top
  2400 – 2700  settle   Wave calms, glow appears
  2700 – 3500  flyout   Logo shrinks + flies to navbar; bg fades
  3500         done     Fires onComplete, component unmounts
   ============================================================ */

export default function LoadingScreen({ onReveal, onComplete }) {
    const waveRef = useRef(null)
    const startRef = useRef(null)
    const rafRef = useRef(null)
    const revealFired = useRef(false)
    const [phase, setPhase] = useState('fadein')

    useEffect(() => {
        startRef.current = performance.now()

        const tick = (now) => {
            const t = now - startRef.current

            /* ---- Phase 1: Fade-in (handled by CSS) ---- */

            /* ---- Phase 2: Wave fill ---- */
            if (t >= 400 && t <= 2400) {
                const p = (t - 400) / 2000
                const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
                const waterLevel = 290 - eased * 305
                const amp = 5 + (1 - p) * 5
                waveRef.current?.setAttribute('d', wavePath(waterLevel, t, amp))
            }

            /* ---- Phase 3: Settle ---- */
            if (t > 2400 && t <= 2700) {
                const sp = (t - 2400) / 300
                const amp = 5 * (1 - sp)
                waveRef.current?.setAttribute('d', wavePath(-15, t, amp))
                if (phase !== 'settle') setPhase('settle')
            }

            /* ---- Phase 4: Flyout ---- */
            if (t > 2700 && phase !== 'flyout') {
                setPhase('flyout')
                if (!revealFired.current) {
                    revealFired.current = true
                    onReveal?.()
                }
            }

            /* ---- Phase 5: Done ---- */
            if (t > 3500) {
                setPhase('done')
                onComplete?.()
                return // stop RAF
            }

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (phase === 'done') return null

    return (
        <div className={`loading-screen ${phase}`}>
            <div className={`loading-logo-wrapper ${phase}`}>
                <svg viewBox="0 0 200 300" className="loading-logo-svg">
                    <defs>
                        {/* Clip the wave to the combined logo shape */}
                        <clipPath id="logo-clip">
                            <path d={OUTER_FLAME} />
                            <path d={TOP_DROPLET} />
                        </clipPath>

                        {/* Liquid gradient (blue → purple) */}
                        <linearGradient id="liquid-grad" x1="0" y1="1" x2="0.3" y2="0">
                            <stop offset="0%" stopColor="#4a90d9" />
                            <stop offset="50%" stopColor="#6b78c4" />
                            <stop offset="100%" stopColor="#7b5ea7" />
                        </linearGradient>
                    </defs>

                    {/* ---- Liquid fill (clipped to logo) ---- */}
                    <g clipPath="url(#logo-clip)">
                        <path
                            ref={waveRef}
                            fill="url(#liquid-grad)"
                            d="M-10 310 L210 310 L210 310 L-10 310 Z"
                        />
                    </g>

                    {/* ---- Logo outline (drawn ON TOP of liquid) ---- */}
                    <g
                        className="logo-outlines"
                        fill="none"
                        stroke="rgba(164,203,235,0.55)"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d={OUTER_FLAME} />
                        <path d={TOP_DROPLET} />
                        <path d={INNER_CURVE} />
                        <path d={INNER_LEAF} />
                        <path d={EYE_SHAPE} />
                    </g>
                </svg>
            </div>
        </div>
    )
}
