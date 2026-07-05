import { type ButtonHTMLAttributes, type FC } from 'react';
import { cn } from '../../lib/utils'; // we'll create a tiny utility

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  const base = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-primary/50 px-6 py-3 text-sm";
  const variants = {
  primary: "bg-green-primary text-white hover:bg-green-600",
  secondary: "bg-forest text-white hover:bg-green-900",     // forest instead of dark-navy
  outline: "border-2 border-forest text-forest hover:bg-forest hover:text-white",
};
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;