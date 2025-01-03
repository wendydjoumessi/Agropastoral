import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <div className="flex items-center justify-center p-8 text-red-500">
    <AlertCircle className="w-5 h-5 mr-2" />
    <span>{message}</span>
  </div>
);