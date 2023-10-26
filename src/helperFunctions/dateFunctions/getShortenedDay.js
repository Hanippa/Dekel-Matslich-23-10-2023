export default function getShortenedDay(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = date.getUTCDay();
    const shortenedDay = daysOfWeek[dayIndex];
  
    return shortenedDay;
  }