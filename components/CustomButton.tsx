import React from "react";
import ComponentsStyles from "@/styles/components.module.scss";
import { CustomButtonProps } from "@/types";

export const CustomButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  loading,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${ComponentsStyles.customButton} ${ComponentsStyles[variant]}`}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
};
