export function transformarBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}