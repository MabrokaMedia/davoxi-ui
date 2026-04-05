import React from 'react';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  /** Optional custom fallback UI. Defaults to a generic error message. */
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * React error boundary that catches rendering errors in its subtree.
 * Displays a user-friendly message with a link back to /login.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    console.error('[ErrorBoundary]', error.message);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or <a href="/login">return to login</a>.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
