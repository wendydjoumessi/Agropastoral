import React from 'react';
import { ImportPanel } from './ImportPanel';
import { CloseButton } from '../ui/CloseButton';

interface ImportPanelOverlayProps {
  onClose: () => void;
}

export function ImportPanelOverlay({ onClose }: ImportPanelOverlayProps) {
  return (
    <div className="absolute right-0 top-12 z-50">
      <div className="relative w-96">
        <CloseButton onClick={onClose} className="absolute top-2 right-2 z-10" />
        <ImportPanel />
      </div>
    </div>
  );
}