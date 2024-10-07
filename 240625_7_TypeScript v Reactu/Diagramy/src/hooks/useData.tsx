import { useEffect } from 'react';
import { Data, Diagram } from '../types';

export function useData(
  setApiData: React.Dispatch<React.SetStateAction<Diagram[] | null>>
) {
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('http://localhost:4000/api/diagrams');
      const data: Diagram[] = await response
        .json()
        .then((result: Data) => result.data);
      setApiData(data);
    };
    fetchData();
  }, []);
}
