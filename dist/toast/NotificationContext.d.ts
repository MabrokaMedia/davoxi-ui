import type { ReactNode } from 'react';
export type NotificationSeverity = 'success' | 'error' | 'warning' | 'info';
export interface Notification {
    id: string;
    message: string;
    severity: NotificationSeverity;
    autoHideDuration: number;
}
export interface NotificationContextValue {
    notifications: Notification[];
    success: (message: string, autoHideDuration?: number) => void;
    error: (message: string, autoHideDuration?: number) => void;
    warning: (message: string, autoHideDuration?: number) => void;
    info: (message: string, autoHideDuration?: number) => void;
    dismiss: (id: string) => void;
}
export declare const NotificationContext: import("react").Context<NotificationContextValue | null>;
export declare function NotificationProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NotificationContext.d.ts.map