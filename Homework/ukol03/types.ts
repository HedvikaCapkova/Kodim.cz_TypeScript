export type Packets = {
  data: Packet[];
};

export type Packet = {
  id: number;
  from: string;
  to: string;
  payload: string;
  stamp: number;
};

export type Email = {
  from: string;
  to: string;
  messages: PriorityQueue<Message>;
};

export type Message = {
  payload: string;
  stamp: number;
};

export type PriorityQueue<T> = QueueItem<T>[];

export type QueueItem<T> = {
  item: T;
  priority: number;
};
