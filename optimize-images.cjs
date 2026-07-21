const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', '..', '..', '..', '..', '..', '..', '..', 'd:', 'New work', 'ssk-handlooms', 'src', 'assets');
// The exact path might be tricky relative to the scratch dir. I will just pass the absolute path in the script directly since it's executed locally.
// Let's hardcode it for safety since we know it.
const TARGET_DIR = 'd:\\New work\\ssk-handlooms\\src\\assets';

async function optimizeImages() {
  const files = fs.readdirSync(TARGET_DIR);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(TARGET_DIR, file);
      const outputFilename = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(TARGET_DIR, outputFilename);

      console.log(`Processing ${file}...`);
      
      try {
        let pipeline = sharp(inputPath);
        const metadata = await pipeline.metadata();
        
        // If it's a huge background image, cap width at 1920
        // If it's a circle image or a smaller section image, maybe cap at 1200
        // To be safe and general, let's cap everything at max width 1920 to prevent 4k/8k images from bloating sizes.
        if (metadata.width > 1920) {
          pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
        }

        await pipeline
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`✅ Saved ${outputFilename}`);
      } catch (e) {
        console.error(`❌ Failed to process ${file}:`, e);
      }
    }
  }
}

optimizeImages().then(() => console.log('Done optimizing images!'));
