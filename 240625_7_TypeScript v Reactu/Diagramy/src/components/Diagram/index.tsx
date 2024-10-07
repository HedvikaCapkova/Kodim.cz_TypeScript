import { JSX } from 'react/jsx-runtime';
import { Diagram } from '../../types';
import { BoxView } from '../BoxView';
import { ConnectionView } from '../ConnectionView';

export const DiagramView = ({ boxes, connections }: Diagram): JSX.Element => {
  return (
    <svg className='board'>
      {connections.map((connection) => (
        <ConnectionView
          key={connection.to}
          sourceBox={boxes[connection.from]}
          targetBox={boxes[connection.to]}
        />
      ))}
      {boxes.map((box) => (
        <BoxView
          key={box.label}
          {...box}
        />
      ))}
    </svg>
  );
};
