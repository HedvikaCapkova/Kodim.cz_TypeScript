interface Time {
  day: number;
  hour: number;
  minute: number;
}

interface BaseCalendarItem {
  name: string;
  startTime: Time;
}

interface Event extends BaseCalendarItem {
  itemType: 'event';
  endTime: Time;
}
interface Task extends BaseCalendarItem {
  itemType: 'task';
  isDone: boolean;
}

export type CalendarItem = Event | Task;
