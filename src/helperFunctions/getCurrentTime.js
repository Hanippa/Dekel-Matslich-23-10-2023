export default function getCurrentTime() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
  };
  const timeString = now.toLocaleString('en-US', options);
  return timeString;
}