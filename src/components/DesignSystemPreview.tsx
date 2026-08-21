import React from 'react';

/**
 * ============================================================
 * DESIGN SYSTEM PREVIEW
 * ============================================================
 * 
 * Development-only component to visually inspect the 
 * Gradient design tokens. This is not part of the production
 * build unless explicitly imported and rendered.
 * 
 * Shows:
 * - Color
 * - Typography
 * - Spacing
 * - Grid
 * - Surfaces
 * - Interaction States
 * ============================================================
 */
export const DesignSystemPreview: React.FC = () => {
  return (
    <div style={{ padding: 'var(--space-8) var(--space-5)', minHeight: '100vh', backgroundColor: 'var(--color-surface-secondary)' }}>
      <div className="container">
        
        <h1 className="text-display" style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-primary)' }}>
          Design System Calibration
        </h1>

        {/* 1. COLOR */}
        <section className="section" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>1. Color</h2>
          <div className="grid">
            <ColorSwatch label="Accent" varName="--color-accent" />
            <ColorSwatch label="Surface Primary" varName="--color-surface-primary" />
            <ColorSwatch label="Surface Secondary" varName="--color-surface-secondary" />
            <ColorSwatch label="Text Primary" varName="--color-text-primary" />
            <ColorSwatch label="Text Secondary" varName="--color-text-secondary" />
            <ColorSwatch label="Text Muted" varName="--color-text-muted" />
            <ColorSwatch label="Success" varName="--color-success" />
            <ColorSwatch label="Warning" varName="--color-warning" />
            <ColorSwatch label="Error" varName="--color-error" />
          </div>
        </section>

        {/* 2. TYPOGRAPHY */}
        <section className="section" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>2. Typography</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-display</div>
              <div className="text-display">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-display-italic</div>
              <div className="text-display text-display-italic">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-heading</div>
              <div className="text-heading">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-subheading</div>
              <div className="text-subheading">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-body</div>
              <div className="text-body">The quick brown fox jumps over the lazy dog. Playfair Display should NOT be used for ordinary body copy. Geist Mono should NOT be used for long-form reading.</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-body-small</div>
              <div className="text-body-small">The quick brown fox jumps over the lazy dog.</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-label</div>
              <div className="text-label">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-metadata</div>
              <div className="text-metadata">The quick brown fox jumps over the lazy dog</div>
            </div>
            <div>
              <div className="text-metadata" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>.text-technical</div>
              <div className="text-technical">The quick brown fox jumps over the lazy dog</div>
            </div>
          </div>
        </section>

        {/* 3. SPACING */}
        <section className="section" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>3. Spacing</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                <div className="text-technical" style={{ width: '80px' }}>--space-{i}</div>
                <div style={{ 
                  height: '24px', 
                  width: `var(--space-${i})`, 
                  backgroundColor: 'var(--color-accent)', 
                  opacity: 0.5 
                }} />
              </div>
            ))}
          </div>
        </section>

        {/* 4. GRID */}
        <section className="section" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>4. Grid (12-column)</h2>
          <div className="grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--color-surface-primary)',
                border: '1px solid var(--color-border-default)',
                padding: 'var(--space-4)',
                textAlign: 'center',
                borderRadius: 'var(--radius-sm)'
              }}>
                <span className="text-metadata">{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SURFACES & SHADOWS */}
        <section className="section" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>5. Surfaces & Shadows</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div style={{ 
              backgroundColor: 'var(--color-surface-primary)', 
              padding: 'var(--space-6)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div className="text-subheading">Standard Surface</div>
              <div className="text-metadata" style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>shadow-sm</div>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--color-surface-elevated)', 
              padding: 'var(--space-6)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-default)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="text-subheading">Elevated Surface</div>
              <div className="text-metadata" style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>shadow-md</div>
            </div>

            <div style={{ 
              backgroundColor: 'var(--color-surface-elevated)', 
              padding: 'var(--space-6)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div className="text-subheading">Highly Elevated</div>
              <div className="text-metadata" style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>shadow-lg</div>
            </div>
          </div>
        </section>

        {/* 6. INTERACTION STATES */}
        <section className="section">
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-5)' }}>6. Interaction States (Accent)</h2>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <StateButton label="Default" bgColor="var(--color-accent)" />
            <StateButton label="Hover (Simulated)" bgColor="var(--color-accent-hover)" />
            <StateButton label="Pressed (Simulated)" bgColor="var(--color-accent-pressed)" />
            <StateButton label="Focus (Simulated)" bgColor="var(--color-accent)" focus />
            <StateButton label="Disabled" bgColor="var(--color-accent-disabled)" style={{ cursor: 'not-allowed' }} />
          </div>
        </section>

        {/* 7. EDITORIAL COMPOSITION */}
        <section className="section">
          <h2 className="text-heading" style={{ marginBottom: 'var(--space-6)' }}>7. Editorial Composition</h2>
          <div style={{
            backgroundColor: 'var(--color-surface-primary)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            padding: 'var(--space-8)'
          }}>
            <div className="grid" style={{ alignItems: 'center' }}>
              {/* Left Column: Text (5 cols) */}
              <div style={{ gridColumn: 'span 5' }}>
                <div className="text-metadata" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                  TECHNICAL / COMMUNITY / 2026
                </div>
                <h3 className="text-display" style={{ marginBottom: 'var(--space-5)' }}>
                  BUILD<br/>
                  something<br/>
                  <span className="text-display-italic">meaningful</span>
                </h3>
                <p className="text-body" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', maxWidth: '90%' }}>
                  The design system brings structure to chaos. It provides a foundation 
                  for authentic engineering, keeping interactions restrained while allowing 
                  the underlying technology to remain visible and accessible.
                </p>
                <button 
                  className="text-label" 
                  style={{ 
                    padding: 'var(--space-3) var(--space-5)', 
                    backgroundColor: 'var(--color-surface-elevated)', 
                    color: 'var(--color-text-primary)', 
                    border: '1px solid var(--color-border-default)', 
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer'
                  }}>
                  Explore Foundation
                </button>
              </div>
              {/* Right Column: Image Placeholder (7 cols) */}
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1.618 / 1', /* Golden Ratio width:height */
                  backgroundColor: 'var(--color-surface-secondary)',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="text-technical" style={{ color: 'var(--color-text-muted)' }}>Image Placeholder (1.618:1)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

const ColorSwatch: React.FC<{ label: string, varName: string }> = ({ label, varName }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', gridColumn: 'span 4' }}>
    <div style={{ 
      height: '80px', 
      backgroundColor: `var(${varName})`, 
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border-subtle)'
    }} />
    <div>
      <div className="text-body-small" style={{ fontWeight: 'var(--font-weight-medium)' }}>{label}</div>
      <div className="text-metadata" style={{ color: 'var(--color-text-muted)' }}>{varName}</div>
    </div>
  </div>
);

const StateButton: React.FC<{ label: string, bgColor: string, style?: React.CSSProperties, focus?: boolean }> = ({ label, bgColor, style, focus }) => (
  <button 
    className="text-label"
    style={{ 
      padding: 'var(--space-3) var(--space-5)',
      backgroundColor: bgColor,
      color: 'var(--color-text-inverse)',
      borderRadius: 'var(--radius-full)',
      border: 'none',
      outline: focus ? 'var(--focus-ring-width) solid var(--focus-ring-color)' : 'none',
      outlineOffset: focus ? 'var(--focus-ring-offset)' : 'none',
      ...style
    }}>
    {label}
  </button>
);
