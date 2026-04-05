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
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(): ErrorBoundaryState;
    componentDidCatch(error: Error): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map