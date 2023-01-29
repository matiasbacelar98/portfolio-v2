import styled from 'styled-components';

// Types
type SizesType = {
  [key: string]: string;
};

type HandImageType = {
  size: string;
};

type Hand = {
  type: 'salute' | 'point' | 'cool';
  size: 'lg' | 'md' | 'sm';
};

// Styles
const sizes: SizesType = {
  lg: 'var(--size-6)',
  md: 'var(--size-4)',
  sm: 'var(--size-3)',
};

const HandImage = styled.img<HandImageType>`
  user-select: none;
  max-width: ${props => `${sizes[props.size]}`};
`;

// Main component
export const HandIcon = ({ type, size }: Hand) => {
  const types = {
    salute: (
      <HandImage src="/icons/waving-hand.png" alt="waving hand" draggable="false" size={size} />
    ),
    point: (
      <HandImage src="/icons/pointright-hand.png" alt="waving hand" draggable="false" size={size} />
    ),
    cool: <HandImage src="/icons/cool-hand.png" alt="waving hand" draggable="false" size={size} />,
  };

  const handTypeNotFound = !types[type];

  if (handTypeNotFound) throw new Error('HandIcon type doesnt exist');
  return types[type];
};
