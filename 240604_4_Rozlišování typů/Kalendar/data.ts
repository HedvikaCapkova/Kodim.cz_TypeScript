import { CalendarItem } from './model.js';

export const calendarItems: CalendarItem[] = [
  {
    name: 'Clean the house',
    startTime: { day: 1, hour: 8, minute: 15 },
    itemType: 'task',
    isDone: false,
  },
  {
    name: 'Dentist',
    startTime: { day: 1, hour: 10, minute: 30 },
    itemType: 'event',
    endTime: { day: 1, hour: 11, minute: 30 },
  },
];
