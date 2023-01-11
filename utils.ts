// FluidValues - Typography/Spacing
type FluidValuesType = (minWidthPx: number, maxWidthPx: number, minValue: number, maxValue: number, pixelsPerRem: number | 16) => string;

export const fluidValues: FluidValuesType = (minWidthPx, maxWidthPx, minValue, maxValue, pixelsPerRem = 16) => {
  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;
  const min = minValue / pixelsPerRem;
  const max = maxValue / pixelsPerRem;

  const slope = (max - min) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + min;

  const clampFunc = `clamp(${min}rem, ${yAxisIntersection.toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw, ${max}rem);`;

  return clampFunc;
};
