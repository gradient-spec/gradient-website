import React from 'react';
import { events } from '@/data/events';
// import { motion } from 'framer-motion';

export const EventGallerySection: React.FC = () => {
  // Flatten all gallery images from all events
  const allImages = events.flatMap(event => event.gallery || []);

  // If no authentic photography is available, gracefully omit the section
  // rather than rendering broken empty image boxes.
  if (allImages.length === 0) {
    return null;
  }

  return (
    <section 
      className="section" 
      aria-labelledby="event-gallery-heading"
      style={{
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-12)',
      }}
    >
      <div className="container">
        <h2 
          id="event-gallery-heading"
          className="text-heading" 
          style={{ marginBottom: 'var(--space-8)' }}
        >
          Gallery
        </h2>
        
        {/* 
          Placeholder for future adaptive editorial image composition.
          Layout will be determined by the natural dimensions and visual character 
          of the approved Gradient photography.
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--space-4)'
        }}>
          {allImages.map((image, index) => (
            <div key={`${image.src}-${index}`} style={{ backgroundColor: 'var(--color-surface-secondary)', aspectRatio: image.aspectRatio || '3/2' }}>
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
