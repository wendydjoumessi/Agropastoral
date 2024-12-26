export interface ImportResult {
  type: 'excel' | 'satellite';
  name: string;
  status: 'processed' | 'error';
  timestamp: string;
  error?: string;
}

export interface ImportOptions {
  onSuccess?: (results: ImportResult[]) => void;
  onError?: (error: Error) => void;
}

export interface FileProcessor {
  process(file: File): Promise<ImportResult>;
  supports(file: File): boolean;
}