import React from 'react';
import { ToolbarButton } from './ToolbarButton';
import { quickActions } from './utils/toolbarConfig';

interface ToolbarActionsProps {
  onAction: (action: string) => void;
}

export function ToolbarActions({ onAction }: ToolbarActionsProps) {
  return (
    <div className="flex items-center space-x-2">
      {quickActions.map((action) => (
        <ToolbarButton
          key={action.label}
          icon={action.icon}
          label={action.label}
          onClick={() => onAction(action.action)}
          badge={action.badge}
        />
      ))}
    </div>
  );
}