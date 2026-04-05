import { type ComponentType, type LazyExoticComponent } from 'react';
/**
 * Lazy import with automatic retry on chunk load failure.
 * Retries once after 1 second if the dynamic import fails (handles deploy cache misses).
 */
export declare function lazyRetry<T extends ComponentType<any>>(factory: () => Promise<{
    default: T;
}>): LazyExoticComponent<T>;
//# sourceMappingURL=lazyRetry.d.ts.map