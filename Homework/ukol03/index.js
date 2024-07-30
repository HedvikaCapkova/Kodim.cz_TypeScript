import { createQueue, dequeue } from './queue.js';
const response = await fetch('http://localhost:4000/api/packets');
const packets = await response
    .json()
    .then((result) => result.data);
const retrieveMessages = (email) => {
    const message = dequeue(email.messages);
    return message ? message.item : null;
};
const renderEmail = ({ from, to, messages }) => {
    const emailElm = document.createElement('table');
    emailElm.classList.add('emailTable');
    let messageHtml = '';
    let message;
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
const renderEmailPage = (data) => {
    const tableElm = document.querySelector('.emailSection');
    data.forEach((email) => {
        tableElm?.appendChild(renderEmail(email));
    });
};
renderEmailPage(createQueue(packets));
