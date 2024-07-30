const enqueue = (queue, queItem) => {
    return [...queue, queItem];
};
export const dequeue = (queue) => {
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
export const createQueue = (packets) => {
    const emailArr = [];
    packets.forEach((packet) => {
        const existingEmail = emailArr.find((email) => email.from === packet.from && email.to === packet.to);
        const message = {
            item: {
                payload: packet.payload,
                stamp: packet.stamp,
            },
            priority: packet.stamp,
        };
        if (existingEmail) {
            existingEmail.messages = enqueue(existingEmail.messages, message);
        }
        else {
            emailArr.push({
                from: packet.from,
                to: packet.to,
                messages: enqueue([], message),
            });
        }
    });
    return emailArr;
};
