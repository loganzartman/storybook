import "./button.css";

interface ButtonProps {
  primary?: boolean,
  backgroundColor?: string,
  size?: 'small' | 'medium' | 'large',
  label: string,
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size = 'medium', label, ...props }: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
