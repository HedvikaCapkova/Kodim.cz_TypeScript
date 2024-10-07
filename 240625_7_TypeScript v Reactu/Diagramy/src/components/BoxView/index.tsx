import { Box } from '../../types';

export const BoxView = ({
  posX,
  posY,
  width,
  height,
  fill,
  label,
}: Box): JSX.Element => {
  console.log(label);
  return (
    <g>
      <rect
        x={posX}
        y={posY}
        rx='5'
        ry='5'
        width={width}
        height={height}
        fill={fill}
        stroke='white'
        strokeWidth='2'
      />
      <text
        className='label'
        x={posX + width / 2}
        y={posY + height / 2}
        textAnchor='middle'
        alignmentBaseline='central'>
        {label}
      </text>
    </g>
  );
};
