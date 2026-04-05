interface Props {
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    loading?: boolean;
    destructive?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}
export declare const ConfirmDialog: import("react").NamedExoticComponent<Props>;
export {};
//# sourceMappingURL=ConfirmDialog.d.ts.map