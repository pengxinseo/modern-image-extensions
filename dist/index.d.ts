/**
 * Modern image file extension list
 * Includes bitmap and vector formats
 */
/**
 * Bitmap format extensions list
 */
export declare const bitmapExtensions: string[];
/**
 * Vector format extensions list
 */
export declare const vectorExtensions: string[];
/**
 * All image format extensions list
 */
export declare const imageExtensions: string[];
/**
 * Check if a file extension is an image format
 * @param extension File extension (without dot)
 * @returns Returns true if it's an image extension, otherwise false
 */
export declare function isImageExtension(extension: string): boolean;
/**
 * Check if a file path is an image
 * @param filePath File path
 * @returns Returns true if it's an image, otherwise false
 */
export declare function isImage(filePath: string): boolean;
export default imageExtensions;
