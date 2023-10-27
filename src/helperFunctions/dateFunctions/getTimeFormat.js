export default function getTimeFormat(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const timeString = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return timeString;
}
