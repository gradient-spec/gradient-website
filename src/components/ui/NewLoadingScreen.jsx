import React, { useState, useEffect, useRef } from 'react';
import LogoSVG from './LogoSVG';
import './LoadingScreen.css';

export default function NewLoadingScreen({ onReveal, onComplete }) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // 'loading' | 'morphing' | 'complete'
    const [isFinished, setIsFinished] = useState(false);

    const splashContainerRef = useRef(null);
    const logoMarkRef = useRef(null);
    const revealFired = useRef(false);

    useEffect(() => {
        setProgress(0);
        setPhase('loading');
        setIsFinished(false);

        if (logoMarkRef.current) {
            logoMarkRef.current.style.transform = 'none';
            logoMarkRef.current.style.transition = 'none';
        }

        let animationFrame;
        let startTime = null;
        const duration = 2100; // 2.1s smooth continuous loading timeline

        const animateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const t = Math.min(elapsed / duration, 1);

            // Smooth organic velocity curve: continuous motion from 0 to 100 without stutter or freezing
            let rawProgress;
            if (t < 0.82) {
                const subT = t / 0.82;
                rawProgress = (1 - Math.pow(1 - subT, 2.2)) * 0.95;
            } else {
                const subT = (t - 0.82) / 0.18;
                rawProgress = 0.95 + subT * 0.05;
            }

            const currentCount = Math.min(100, Math.floor(rawProgress * 100));
            setProgress(currentCount);

            if (t < 1) {
                animationFrame = requestAnimationFrame(animateProgress);
            } else {
                setProgress(100);

                // Hold briefly at 100% full, then trigger morph transition
                setTimeout(() => {
                    setPhase('morphing');

                    // Fire onReveal so the main app can start showing content behind
                    if (!revealFired.current) {
                        revealFired.current = true;
                        onReveal?.();
                    }

                    if (logoMarkRef.current) {
                        const splashRect = logoMarkRef.current.getBoundingClientRect();

                        // Morph towards top-left navbar logo position
                        const isMobile = window.innerWidth <= 768;
                        const targetLeft = isMobile ? 22 : 42;
                        const targetTop = isMobile ? 22 : 34;
                        const targetSize = isMobile ? 46 : 64;

                        const splashCenterX = splashRect.left + splashRect.width / 2;
                        const splashCenterY = splashRect.top + splashRect.height / 2;
                        const targetCenterX = targetLeft + targetSize / 2;
                        const targetCenterY = targetTop + targetSize / 2;
                        const scale = targetSize / splashRect.height;

                        const deltaX = targetCenterX - splashCenterX;
                        const deltaY = targetCenterY - splashCenterY;

                        logoMarkRef.current.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
                        logoMarkRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
                    }

                    // Complete transition and reveal website
                    setTimeout(() => {
                        setPhase('complete');
                        setIsFinished(true);
                        if (onComplete) onComplete();
                    }, 1000);
                }, 180);
            }
        };

        animationFrame = requestAnimationFrame(animateProgress);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isFinished) {
        return null;
    }

    return (
        <div
            ref={splashContainerRef}
            className={`splash-overlay ${phase === 'morphing' || phase === 'complete' ? 'is-morphing' : ''}`}
        >
            <div className="splash-center">
                {/* Center Logo Mark Filling with #D3D3D3 as Progress Bar */}
                <div ref={logoMarkRef} className="splash-logo-mark-box">
                    <LogoSVG progress={progress} />
                </div>

                {/* Brand Text + Progress Counter */}
                <div className={`splash-brand-text-wrapper ${phase !== 'loading' ? 'fade-out' : ''}`}>
                    <div className="brand-text-block">
                        <h2 className="brand-title">GRADIENT</h2>
                        <p className="brand-subtitle">Ideas ARE AUTOMATED</p>
                    </div>

                    <div className="splash-percentage-row">
                        <span className="splash-percentage">{progress}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
