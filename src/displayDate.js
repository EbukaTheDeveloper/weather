import moment from 'moment';

export default function getDate(dateText) {
    let date = moment(); 
    let currentDate = date.format(`dddd Do, MMMM 'YY`);
    dateText.textContent = currentDate;
  }