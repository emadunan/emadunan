import React from "react";
import styles from "./Textarea.module.css";

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
}

const Textarea: React.FC<Props> = ({
  label,
  error,
  size = "md",
  className,
  ...rest
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      {label && <label className={styles.label}>{label}</label>}

      <textarea
        className={`${styles.textarea} ${
          error ? styles.errorTextarea : ""
        } ${className || ""}`}
        {...rest}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Textarea;