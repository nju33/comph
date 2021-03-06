export default class Image extends HTMLImageElement {
  static genSVG(width: number, height: number, color: string) {
    return `
<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="35" fill="rgba(0,0,0,0.4)">${width} x ${height}</text>
</svg>
    `;
  }

  static toBase64(svgXml: string): string {
    return `data:image/svg+xml;base64,${btoa(svgXml)}`;
  }

  constructor() {
    super();

    setTimeout(this.init, 0);
  }

  get width(): number {
    return Number(this.getAttribute('width')) || 150;
  }

  get height(): number {
    return Number(this.getAttribute('height')) || 150;
  }

  get color(): string {
    return this.getAttribute('color') || '#ccc';
  }

  init = () => {
    const svg = Image.genSVG(this.width, this.height, this.color);

    this.src = Image.toBase64(svg);
  };
}
