import { createContext, useState, useCallback, PropsWithChildren } from 'react';

//----------- Types -----------//
type SectionType = {
  name: string;
  distance: number;
};

type DistancesContextType = {
  positions: SectionType[];
  storeSectionDistance(value: SectionType): void;
};

//----------- Context -----------//
export const DistancesContext = createContext<DistancesContextType>({
  positions: [],
  storeSectionDistance() {},
});

//----------- Provider -----------//
export const DistancesProvider = ({ children }: PropsWithChildren) => {
  const [positions, setPositions] = useState<SectionType[]>([]);

  const storeSectionDistance = useCallback((newSection: SectionType) => {
    setPositions(prev => [...prev, newSection]);
  }, []);

  return (
    <DistancesContext.Provider value={{ positions, storeSectionDistance }}>
      {children}
    </DistancesContext.Provider>
  );
};
