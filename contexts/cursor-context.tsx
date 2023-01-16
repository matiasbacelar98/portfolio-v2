import { createContext, useReducer, Dispatch, PropsWithChildren } from 'react';

//----------- Types -----------//
type Action = { type: 'updatePositions'; payload: { x: number; y: number } } | { type: 'updateCursorType'; payload: string };

type CursorContextValue = {
  positions: [number, number];
  cursorType: string;
  cursorStyles: string[];
  dispatch: Dispatch<Action>;
};

type CursorStateType = {
  positions: [number, number];
  cursorType: string;
  cursorStyles: string[];
};

//----------- Context -----------//
export const CursorContext = createContext<CursorContextValue>({
  positions: [0, 0],
  cursorType: '',
  cursorStyles: [''],
  dispatch: () => null,
});

//----------- Reducer -----------//
// InitialValue
const cursorState: CursorStateType = {
  positions: [0, 0],
  cursorType: 'default',
  cursorStyles: ['default', 'hovered', 'see', 'logo'],
};

// Reducer
const cursorReducer = (state: CursorStateType, action: Action): CursorStateType => {
  switch (action.type) {
    case 'updatePositions':
      return {
        ...state,
        positions: [action.payload.x, action.payload.y],
      };
    case 'updateCursorType':
      return {
        ...state,
        cursorType: action.payload,
      };
    default:
      return state;
  }
};

//----------- Provider -----------//
export const CursorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cursorReducer, cursorState);

  return <CursorContext.Provider value={{ ...state, dispatch }}>{children}</CursorContext.Provider>;
};
