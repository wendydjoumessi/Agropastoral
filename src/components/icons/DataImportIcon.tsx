import React from 'react';

interface DataImportIconProps {
  size?: number;
  className?: string;
}

export function DataImportIcon({ size = 24, className = '' }: DataImportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Satellite */}
      <path d="M3.7 13.4C2 11.7 1 9.4 1 6.9 1 4.4 2 2.1 3.7 0.4" />
      <path d="M6.6 16.3C4.1 13.8 2.6 10.5 2.6 6.9 2.6 3.3 4.1 0 6.6-2.5" />
      <circle cx="12" cy="12" r="3" />
      
      {/* Excel File */}
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      
      {/* Grid Lines */}
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="10" y1="9" x2="16" y2="9" />
    </svg>
  );
}