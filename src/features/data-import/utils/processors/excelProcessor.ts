export async function processExcelFile(file: File) {
  // TODO: Implémenter le traitement des fichiers Excel
  console.log('Traitement du fichier Excel:', file.name);
  return {
    type: 'excel',
    name: file.name,
    status: 'processed',
    timestamp: new Date().toISOString()
  };
}