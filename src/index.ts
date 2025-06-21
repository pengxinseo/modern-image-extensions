/**
 * Modern image file extension list
 * Includes bitmap and vector formats
 */

/**
 * Bitmap format extensions list
 */
export const bitmapExtensions = [
  'jpg',
  'jpeg',
  'jpe',
  'jif',
  'jfif',
  'jfi',
  'png',
  'gif',
  'webp',
  'tiff',
  'tif',
  'bmp',
  'dib',
  'heif',
  'heic',
  'avif',
  'raw',
  'arw',
  'cr2',
  'nrw',
  'k25',
  'jp2',
  'j2k',
  'jpf',
  'jpx',
  'jpm',
  'mj2',
  'ico',
  'cur',
  'psd',
  'xcf',
  'exr',
  'pbm',
  'pgm',
  'ppm',
  'pnm',
  'tga',
  'icb',
  'vda',
  'vst',
  'hdr',
  'jxr',
  'wdp',
  'hdp',
  'jxl'
];

/**
 * Vector format extensions list
 */
export const vectorExtensions = [
  'svg',
  'svgz',
  'ai',
  'eps',
  'pdf',
  'cdr',
  'emf',
  'wmf',
  'sk',
  'sketch',
  'fig',
  'afdesign',
  'drawio',
  'odg'
];

/**
 * All image format extensions list
 */
export const imageExtensions = [
  ...bitmapExtensions,
  ...vectorExtensions
];

/**
 * Check if a file extension is an image format
 * @param extension File extension (without dot)
 * @returns Returns true if it's an image extension, otherwise false
 */
export function isImageExtension(extension: string): boolean {
  return imageExtensions.includes(extension.toLowerCase());
}

/**
 * Check if a file path is an image
 * @param filePath File path
 * @returns Returns true if it's an image, otherwise false
 */
export function isImage(filePath: string): boolean {
  const extension = filePath.split('.').pop() || '';
  return isImageExtension(extension);
}

// Default export of all image extensions list
export default imageExtensions; 