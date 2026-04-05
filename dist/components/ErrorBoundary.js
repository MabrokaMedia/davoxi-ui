import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
/**
 * React error boundary that catches rendering errors in its subtree.
 * Displays a user-friendly message with a link back to /login.
 */
export class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error) {
        console.error('[ErrorBoundary]', error.message);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback)
                return this.props.fallback;
            return (_jsxs("div", { style: { padding: 40, textAlign: 'center' }, children: [_jsx("h2", { children: "Something went wrong" }), _jsxs("p", { children: ["Please refresh the page or ", _jsx("a", { href: "/login", children: "return to login" }), "."] })] }));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map