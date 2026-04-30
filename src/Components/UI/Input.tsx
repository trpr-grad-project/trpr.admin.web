import type { LucideIcon } from "lucide-react";
import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
}

export default function Input({
  type = "text",
  placeholder,
  icon: Icon,
  label,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-zinc-400">
            <Icon size={20} />
          </div>
        )}

        <input
          type={type}
          placeholder={placeholder}
          {...props}
          className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
        />
      </div>
    </div>
  );
}
