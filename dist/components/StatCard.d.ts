import type { ComponentType } from 'react';
interface Props {
    label: string;
    value: string | number;
    icon: ComponentType<{
        sx?: object;
    }>;
    color: string;
    onClick?: () => void;
}
export declare const StatCard: import("react").NamedExoticComponent<Props>;
export {};
//# sourceMappingURL=StatCard.d.ts.map