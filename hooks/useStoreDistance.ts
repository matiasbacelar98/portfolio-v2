import { useEffect, useRef, useContext, RefObject } from 'react';
import { DistancesContext } from '@/contexts/distances-context';

export const useStoreDistance = (sectionName: string): { ref: RefObject<HTMLElement> } => {
  const effectRan = useRef(false);
  const ref = useRef<HTMLElement>(null);

  const distancesContext = useContext(DistancesContext);
  const { storeSectionDistance } = distancesContext;

  // Store pos in state context
  useEffect(() => {
    // If effect status is true return
    if (effectRan.current) return;

    if (ref.current) {
      const distanceToTopOfWindow = ref.current.getBoundingClientRect().top;
      storeSectionDistance({
        name: sectionName,
        distance: distanceToTopOfWindow,
      });

      // Update effect status
      effectRan.current = true;
    }
  }, [sectionName, storeSectionDistance]);

  return { ref };
};
