const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images/luxury');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.(jpg|png)$/, '.webp'));
    
    sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Optimized ${file} to .webp`);
        fs.unlinkSync(inputPath); // remove the original jpg
      })
      .catch(err => {
        console.error(`Error optimizing ${file}:`, err);
      });
  }
});
