import type { ComponentType, ReactNode } from 'react';
interface Crumb {
    label: string;
    to?: string;
}
interface Props {
    title: string;
    subtitle?: string;
    breadcrumbs?: Crumb[];
    actionLabel?: string;
    onAction?: () => void;
    actionIcon?: ReactNode;
    /** Router link component (e.g. react-router-dom Link). Receives { to, children } props. */
    linkComponent?: ComponentType<{
        to: string;
        children: ReactNode;
    }>;
}
export declare const PageHeader: import("react").NamedExoticComponent<Props>;
export {};
//# sourceMappingURL=PageHeader.d.ts.map