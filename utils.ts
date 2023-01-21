// FluidValues - Typography/Spacing
type FluidValuesType = (
  minWidthPx: number,
  maxWidthPx: number,
  minValue: number,
  maxValue: number,
  pixelsPerRem?: number
) => string;

export const fluidValues: FluidValuesType = (
  minWidthPx,
  maxWidthPx,
  minValue,
  maxValue,
  pixelsPerRem = 16
) => {
  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;
  const min = minValue / pixelsPerRem;
  const max = maxValue / pixelsPerRem;

  const slope = (max - min) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + min;

  const clampFunc = `clamp(${min}rem, ${yAxisIntersection.toFixed(4)}rem + ${(slope * 100).toFixed(
    4
  )}vw, ${max}rem);`;

  return clampFunc;
};

// PixelsToRem
type PixelsToRemType = (value: string) => string;

export const pixelsToRem: PixelsToRemType = value => {
  return `${Number(value) / 16}rem`;
};

// Get element x & y center coordinates
type GetBoundingBoxType = <T extends HTMLElement>(
  target: T
) => { xCenter: number; yCenter: number };

export const getBoundingBox: GetBoundingBoxType = target => {
  const box = target.getBoundingClientRect();

  return {
    xCenter: (box.left + box.right) / 2,
    yCenter: (box.top + box.bottom) / 2,
  };
};

// Format href
export const formatSectionName = (str: string): string => str.replace(/[#/]/g, '').toLowerCase();
