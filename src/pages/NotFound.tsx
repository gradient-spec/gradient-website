/**
 * 404 — Not Found page.
 *
 * Spec: "404 is simple and branded."
 * Minimal implementation; visual design deferred.
 */

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main id="main-content" style={{ textAlign: 'center', padding: 'var(--section-padding-y) var(--space-5)' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Return home</Link>
    </main>
  );
};

export default NotFoundPage;
