import { processExcelFile, processSatelliteImage } from './processors';

export async function processFiles(files: FileList) {
  const results = await Promise.all(
    Array.from(files).map(async (file) => {
      if (file.type.includes('excel') || file.type.includes('spreadsheet')) {
        return await processExcelFile(file);
      } else if (file.type.includes('image')) {
        return await processSatelliteImage(file);
      }
      throw new Error(`Type de fichier non supporté: ${file.type}`);
    })
  );

  return results;
}