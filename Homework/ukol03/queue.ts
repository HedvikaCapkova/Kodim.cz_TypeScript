import { Email, Packet, PriorityQueue, QueueItem } from './types.js';

const enqueue = <T>(
  queue: PriorityQueue<T>,
  queItem: QueueItem<T>
): PriorityQueue<T> => {
  return [...queue, queItem];
};

export const dequeue = <T>(queue: PriorityQueue<T>): QueueItem<T> | null => {
  if (queue.length === 0) {
    return null;
  }

  let highestPriorityIndex = 0;
  for (let i = 1; i < queue.length; i++) {
    if (queue[i].priority < queue[highestPriorityIndex].priority) {
      highestPriorityIndex = i;
    }
  }

  const [highestPriorityItem] = queue.splice(highestPriorityIndex, 1);
  return highestPriorityItem;
};

export const createQueue = (packets: Packet[]): Email[] => {
  const emailArr: Email[] = [];

  packets.forEach((packet: Packet) => {
    const existingEmail = emailArr.find(
      (email) => email.from === packet.from && email.to === packet.to
    );

    const message = {
      item: {
        payload: packet.payload,
        stamp: packet.stamp,
      },
      priority: packet.stamp,
    };

    if (existingEmail) {
      existingEmail.messages = enqueue(existingEmail.messages, message);
    } else {
      emailArr.push({
        from: packet.from,
        to: packet.to,
        messages: enqueue([], message),
      });
    }
  });
  return emailArr;
};
