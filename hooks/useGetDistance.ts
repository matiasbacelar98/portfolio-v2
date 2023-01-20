import { useContext } from 'react';
import { DistancesContext } from '@/contexts/distances-context';
import { sectionNames } from '@/constants';

export const useGetDistance = () => {
  const distancesContext = useContext(DistancesContext);
  const { positions } = distancesContext;

  const goToSection = (sectionName: string): void => {
    if (sectionName === sectionNames.home) return scrollTo(0, 0);
    if (sectionName === sectionNames.contact) return scrollTo(0, document.body.scrollHeight);

    const distance = positions.filter(pos => pos.name === sectionName)[0].distance;
    scrollTo(0, distance);
  };

  return { goToSection };
};
