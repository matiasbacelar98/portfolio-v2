import { useContext } from 'react';
import { CursorContext } from '@/contexts/cursor-context';

export const useCursor = () => {
  const cursorContext = useContext(CursorContext);
  const { positions, cursorType, cursorStyles, dispatch } = cursorContext;

  //--------- Utils ---------//
  type CursorType = (cursorType: string) => void;

  const updateCursorType: CursorType = cursorType => {
    // Get cursor
    const selectedCursorType = cursorStyles.filter(type => type === cursorType)[0];

    dispatch({
      type: 'updateCursorType',
      payload: selectedCursorType,
    });
  };

  type CursorPos = (x: number, y: number) => void;

  const updateCursorPos: CursorPos = (x, y) => {
    dispatch({
      type: 'updatePositions',
      payload: { x, y },
    });
  };

  const resetCursorPos = (): void => {
    dispatch({
      type: 'updatePositions',
      payload: { x: 0, y: 0 },
    });
  };

  const resetCursorType = (): void => {
    dispatch({
      type: 'updateCursorType',
      payload: 'default',
    });
  };

  return {
    positions,
    cursorType,
    updateCursorType,
    resetCursorType,
    resetCursorPos,
    updateCursorPos,
  };
};
