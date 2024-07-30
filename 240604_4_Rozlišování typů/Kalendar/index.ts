import { calendarItems } from './data.js';
import { CalendarItem } from './model.js';

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};

const renderItem = (calendarItem: CalendarItem): Element => {
  console.log('renderItem', calendarItem);
  const itemMarginTop: number =
    calendarItem.startTime.hour * 60 + calendarItem.startTime.minute;
  let eventHeight: number | undefined;
  if (calendarItem.itemType === 'event') {
    // const event = calendarItem as Event;
    eventHeight =
      calendarItem.endTime.hour * 60 +
      calendarItem.endTime.minute -
      (calendarItem.startTime.hour * 60 + calendarItem.startTime.minute);
  }
  const calendarItemElm: HTMLDivElement = document.createElement('div');
  calendarItemElm.classList.add('calendar-item');
  calendarItemElm.classList.add(`item-${calendarItem.itemType}`);
  calendarItemElm.innerHTML = `<div class="title">${calendarItem.name}</div>
   <div class="time">${calendarItem.startTime.hour}:${calendarItem.startTime.minute}</div>
   `;
  calendarItemElm.style.marginTop = `${itemMarginTop}px`;
  calendarItemElm.style.height = eventHeight ? `${eventHeight}px` : 'auto';
  return calendarItemElm;
};

const renderCalendar = (calendarItems: CalendarItem[]): void => {
  calendarItems.forEach((calendarItem) => {
    console.log('renderCalendar', calendarItem);
    const calendarDayElm = document.getElementById(
      `day${calendarItem.startTime.day}`
    )!;
    calendarDayElm.appendChild(renderItem(calendarItem));
  });
};
renderGrid();
renderCalendar(calendarItems);
