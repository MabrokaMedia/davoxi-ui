import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

/**
 * Lazy import with automatic retry on chunk load failure.
 * Retries once after 1 second if the dynamic import fails (handles deploy cache misses).
 */
export function lazyRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
): LazyExoticComponent<T> {
  return lazy(() =>
    factory().catch(
      () => new Promise<{ default: T }>((resolve) => {
        setTimeout(() => resolve(factory()), 1000);
      }),
    ),
  );
}
