import type { ReactNode, ComponentType } from 'react';
interface Props {
    icon?: ComponentType<{
        sx?: object;
    }>;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    children?: ReactNode;
}
export declare const EmptyState: import("react").NamedExoticComponent<Props>;
export {};
//# sourceMappingURL=EmptyState.d.ts.map