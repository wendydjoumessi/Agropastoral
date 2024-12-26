import React from 'react';

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  badge?: string;
}

export function ToolbarButton({ icon, label, onClick, badge }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {icon}
      <span className="sr-only">{label}</span>
      {badge && (
        <span className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}