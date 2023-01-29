import { MouseEvent } from 'react';

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

// Check if mouse left from the top
type MouseLeaveFromTheTopType = <T extends HTMLElement>(e: MouseEvent, ref: T) => boolean;

export const mouseLeaveFromTheTop: MouseLeaveFromTheTopType = (e, target) => {
  const bottom = target.offsetTop + target.getBoundingClientRect().height;
  return bottom > e.pageY;
};

// Add sroll to page
export const addScroll = () => {
  const htmlNode = document.querySelector('html');
  if (htmlNode) htmlNode.classList.remove('remove-scroll');
};
