const sharp = require('sharp');

const SRC = 'src/assets/brand/logo.png';

const VARIANTS = [
  { out: 'src/assets/brand/logo-white.png', rgb: [255, 255, 255] },
  { out: 'src/assets/brand/logo-navy.png', rgb: [0x24, 0x36, 0x8c] },
];

(async () => {
  const img = sharp(SRC);
  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (const { out: OUT, rgb } of VARIANTS) {
    const out = Buffer.alloc(width * height * 4);
    for (let i = 0, p = 0; i < data.length; i += channels, p += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const minC = Math.min(r, g, b);
      let alpha = 255 - minC;
      alpha = Math.max(0, Math.min(255, Math.round((alpha - 20) * 1.3)));
      out[p] = rgb[0];
      out[p + 1] = rgb[1];
      out[p + 2] = rgb[2];
      out[p + 3] = alpha;
    }

    await sharp(out, { raw: { width, height, channels: 4 } })
      .trim()
      .png()
      .toFile(OUT);

    console.log('wrote', OUT);
  }
})();
