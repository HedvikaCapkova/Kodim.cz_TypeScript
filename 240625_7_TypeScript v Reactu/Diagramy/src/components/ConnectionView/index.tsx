import { ConnectionData } from '../../types';

export const ConnectionView = ({
  sourceBox,
  targetBox,
}: ConnectionData): JSX.Element => {
  const x1 = sourceBox.posX + sourceBox.width / 2;
  const y1 = sourceBox.posY + sourceBox.height / 2;
  const x2 = targetBox.posX + targetBox.width / 2;
  const y2 = targetBox.posY + targetBox.height / 2;
  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke='white'
        strokeWidth='2'
      />
    </>
  );
};
