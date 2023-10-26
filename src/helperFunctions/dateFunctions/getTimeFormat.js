export default function getTimeFormat(dateString) {
    // Parse the input date string
    const date = new Date(dateString);
  
    // Get hours, minutes, and AM/PM
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  
    // Format the time string
    const timeString = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  
    return timeString;
  }