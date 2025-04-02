// src/components/Input.tsx
interface InputProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
  }
  
  export default function Input({
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    readOnly = false,
    className = "",
  }: InputProps) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        className={`p-4 bg-white/5 border border-gray-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400 transition-all ${readOnly ? "bg-black/20 border-gray-600/30" : ""} ${className}`}
      />
    );
  }