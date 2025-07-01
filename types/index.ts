export interface CustomInputProps {
    placeholder?: string;
    error?: string;
    [key: string]: any;
}

export interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    disabled?: boolean;
    loading?: boolean
}