# modern-image-extensions

Modern image file extension list, including the latest bitmap and vector formats.

[![npm version](https://img.shields.io/npm/v/modern-image-extensions.svg)](https://www.npmjs.com/package/modern-image-extensions)
[![license](https://img.shields.io/npm/l/modern-image-extensions.svg)](https://github.com/zhengpengxin/modern-image-extensions/blob/main/LICENSE)

## Features

- Includes the latest image format extensions (such as WebP, AVIF, HEIF, JXL, etc.)
- Distinguishes between bitmap and vector formats
- Provides useful helper functions
- Written in TypeScript with complete type definitions
- Zero dependencies

## Installation

```bash
# Using npm
npm install modern-image-extensions

# Using yarn
yarn add modern-image-extensions

# Using pnpm
pnpm add modern-image-extensions
```

## Usage

### Basic Usage

```javascript
// ESM import
import imageExtensions from 'modern-image-extensions';

console.log(imageExtensions);
// ['jpg', 'jpeg', 'png', 'gif', 'svg', ...]

// CommonJS import
const imageExtensions = require('modern-image-extensions');

console.log(imageExtensions);
// ['jpg', 'jpeg', 'png', 'gif', 'svg', ...]
```

### Get Specific Types of Extensions

```javascript
import { bitmapExtensions, vectorExtensions } from 'modern-image-extensions';

console.log(bitmapExtensions);
// ['jpg', 'jpeg', 'png', 'gif', 'webp', ...]

console.log(vectorExtensions);
// ['svg', 'ai', 'eps', 'pdf', ...]
```

### Check File Extensions

```javascript
import { isImageExtension, isImage } from 'modern-image-extensions';

// Check if an extension is an image format
console.log(isImageExtension('jpg')); // true
console.log(isImageExtension('txt')); // false

// Check if a file path is an image
console.log(isImage('path/to/image.png')); // true
console.log(isImage('path/to/document.txt')); // false
```

## API Reference

### `imageExtensions`

An array of all image format extensions (bitmap and vector formats).

### `bitmapExtensions`

An array of bitmap format extensions.

### `vectorExtensions`

An array of vector format extensions.

### `isImageExtension(extension: string): boolean`

Checks if the given extension is an image format.

- `extension`: File extension (without dot)

### `isImage(filePath: string): boolean`

Checks if the given file path is an image.

- `filePath`: File path

## Comparison with the original image-extensions

Compared to the original [image-extensions](https://www.npmjs.com/package/image-extensions) package, this package has the following advantages:

1. **More comprehensive format support**: Includes more modern image formats such as WebP, AVIF, HEIF, JXL, etc.
2. **Format categorization**: Distinguishes between bitmap and vector formats for easier use as needed
3. **Utility functions**: Provides useful functions like `isImageExtension` and `isImage`
4. **TypeScript support**: Written in TypeScript with complete type definitions
5. **Continuous maintenance**: The original package hasn't been updated in 10 years; this package will be continuously maintained and updated

## License

MIT © Zhengpengxin

## Author

Created with ❤️ by [tiepolo ai](https://tiepolo.app) 