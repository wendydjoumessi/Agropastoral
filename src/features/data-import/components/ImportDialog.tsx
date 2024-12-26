import React from 'react';
import { Dialog } from '@/components/ui/Dialog';
import { ImportPanel } from './ImportPanel';

interface ImportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImportDialog({ isOpen, onClose }: ImportDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Importer des données"
      size="lg"
    >
      <ImportPanel onSuccess={onClose} />
    </Dialog>
  );
}