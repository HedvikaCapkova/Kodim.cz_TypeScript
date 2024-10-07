export type Data = {
  data: Diagram[];
};

export type Diagram = {
  id: number;
  title: string;
  boxes: Box[];
  connections: Connection[];
};

export type Box = {
  posX: number;
  posY: number;
  width: number;
  height: number;
  fill: string;
  label: string;
};

export type Connection = {
  from: number;
  to: number;
};

export type ConnectionData = {
  sourceBox: Box;
  targetBox: Box;
};
