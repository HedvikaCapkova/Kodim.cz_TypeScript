import { createQueue, dequeue } from './queue.js';
import { Email, Message, Packet, Packets } from './types.js';

const response = await fetch('http://localhost:4000/api/packets');
const packets: Packet[] = await response
  .json()
  .then((result: Packets) => result.data);

const retrieveMessages = (
  email: Email
): { payload: string; stamp: number } | null => {
  const message = dequeue(email.messages);
  return message ? message.item : null;
};

const renderEmail = ({ from, to, messages }: Email): Element => {
  const emailElm: HTMLTableElement = document.createElement('table');
  emailElm.classList.add('emailTable');

  let messageHtml = '';
  let message: Message | null;
  while ((message = retrieveMessages({ from, to, messages }))) {
    messageHtml += `<p>${message.payload}</p>`;
  }

  emailElm.innerHTML = `  
    <tbody>
        <table>
          <tbody>
            <tr>
              <td><strong>From:</strong></td>
              <td class="sender">${from}</td>
            </tr>
            <tr>
              <td><strong>To:</strong></td>
              <td class="recipient">${to}</td>
            </tr>
            <tr class="message">
                 <td><strong>Message:</strong></td>
            </tr>     
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                  ${messageHtml}
              </td>
            </tr>
          </tbody>
        </table>
    </tbody>
   `;

  return emailElm;
};

const renderEmailPage = (data: Email[]): void => {
  const tableElm = document.querySelector('.emailSection');
  data.forEach((email: Email) => {
    tableElm?.appendChild(renderEmail(email));
  });
};

const outputMessage = (message) => {
  console.log(message);
};

const response = await fetch('https://api.example.com/data');
const data = await response.json();

renderEmailPage(createQueue(packets));
