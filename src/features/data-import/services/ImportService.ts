import { processExcelFile, processSatelliteImage } from '../utils/processors';
import { ImportResult } from '../types';

export class ImportService {
  static async importFiles(files: File[]): Promise<ImportResult[]> {
    return Promise.all(
      files.map(async (file) => {
        if (this.isExcelFile(file)) {
          return await processExcelFile(file);
        }
        if (this.isSatelliteImage(file)) {
          return await processSatelliteImage(file);
        }
        throw new Error(`Type de fichier non supporté: ${file.type}`);
      })
    );
  }

  private static isExcelFile(file: File): boolean {
    return file.type.includes('excel') || 
           file.type.includes('spreadsheet') ||
           file.name.endsWith('.xlsx') ||
           file.name.endsWith('.xls');
  }

  private static isSatelliteImage(file: File): boolean {
    return file.type.includes('image');
  }
}