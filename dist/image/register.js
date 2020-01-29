(function () {
  'use strict';

  class Image extends HTMLImageElement {
      static genSVG(width, height, color) {
          return `
<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="35" fill="rgba(0,0,0,0.4)">${width} x ${height}</text>
</svg>
    `;
      }
      static toBase64(svgXml) {
          return `data:image/svg+xml;base64,${btoa(svgXml)}`;
      }
      constructor() {
          super();
          const svg = Image.genSVG(this.width, this.height, this.color);
          const base64Svg = Image.toBase64(svg);
          this.setAttribute('src', base64Svg);
      }
      get width() {
          return Number(this.getAttribute('width')) || 150;
      }
      get height() {
          return Number(this.getAttribute('height')) || 150;
      }
      get color() {
          return this.getAttribute('color') || '#ccc';
      }
  }

  customElements.define('img-placeholder', Image, { extends: 'img' });

}());
