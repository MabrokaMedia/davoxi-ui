import { lazy } from 'react';
/**
 * Lazy import with automatic retry on chunk load failure.
 * Retries once after 1 second if the dynamic import fails (handles deploy cache misses).
 */
export function lazyRetry(factory) {
    return lazy(() => factory().catch(() => new Promise((resolve) => {
        setTimeout(() => resolve(factory()), 1000);
    })));
}
//# sourceMappingURL=lazyRetry.js.map