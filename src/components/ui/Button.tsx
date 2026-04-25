interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300 focus-visible:ring-blue-500 active:scale-95 disabled:hover:bg-blue-600',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md hover:shadow-gray-300 focus-visible:ring-gray-400 active:scale-95 disabled:hover:bg-gray-100',
    outline:
      'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-200 focus-visible:ring-blue-500 active:scale-95 disabled:hover:bg-transparent',
    light:
      'border-2 border-white text-white bg-white/10 hover:bg-white/20 hover:border-white hover:shadow-lg hover:shadow-white/20 focus-visible:ring-white active:scale-95 disabled:hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-lg" />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
