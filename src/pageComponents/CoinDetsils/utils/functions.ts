export const hexToRgb = (hex: any) => {
  const rgb = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m: any, r: any, g: any, b: any) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map((x: any) => parseInt(x, 16));

  return rgb;
};
