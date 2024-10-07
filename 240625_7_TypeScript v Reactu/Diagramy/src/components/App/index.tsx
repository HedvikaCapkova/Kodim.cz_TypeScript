import { useState } from 'react';
import { useData } from '../../hooks/useData';
import { Diagram } from '../../types';
import { DiagramView } from '../Diagram';

export const App = (): JSX.Element | null => {
  const [apiData, setApiData] = useState<Diagram[] | null>(null);

  useData(setApiData);

  if (!apiData) {
    return null;
  }

  return (
    <div className='layout'>
      <header className='header'>
        <h1>{apiData[0].title}</h1>
        <div className='label-field'>
          <label htmlFor='box-label'>Label:</label>
          <input
            type='text'
            id='box-label'
            disabled
          />
        </div>
      </header>
      <svg className='board'>
        {apiData.map((diagram) => (
          <DiagramView {...diagram} />
        ))}
      </svg>
    </div>
  );
};
