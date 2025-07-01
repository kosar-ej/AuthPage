import { CustomInputProps } from "@/types";
import ComponentsStyles from "@/styles/components.module.scss";

export default function CustomInput({
  placeholder = "",
  error = "",
  ...props
}: CustomInputProps) {
  return (
    <div className={ComponentsStyles.customInputContainer}>
      <input
        placeholder={placeholder}
        {...props}
        className={ComponentsStyles.customInput}
      />
      {error && (
        <span className={ComponentsStyles.customInputErrorMessage}>{error}</span>
      )}
    </div>
  );
}
