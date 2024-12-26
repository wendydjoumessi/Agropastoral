import React from 'react';
import { ToolbarDropdown } from './ToolbarDropdown';
import { toolbarSections } from './utils/toolbarConfig';

interface ToolbarSectionProps {
  onAction: (action: string) => void;
}

export function ToolbarSection({ onAction }: ToolbarSectionProps) {
  return (
    <div className="flex items-center space-x-4">
      {toolbarSections.map((section) => (
        <ToolbarDropdown
          key={section.label}
          label={section.label}
          icon={section.icon}
          items={section.items.map(item => ({
            ...item,
            onClick: () => onAction(item.action)
          }))}
        />
      ))}
    </div>
  );
}