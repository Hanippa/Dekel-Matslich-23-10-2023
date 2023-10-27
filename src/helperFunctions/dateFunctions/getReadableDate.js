export default function getReadableDate(dateString) {
  const inputDateTime = new Date(dateString);
  const currentDate = new Date();

  if (
    inputDateTime.getDate() === currentDate.getDate() &&
    inputDateTime.getMonth() === currentDate.getMonth() &&
    inputDateTime.getFullYear() === currentDate.getFullYear()
  ) {
    return "Today";
  } else {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return inputDateTime.toLocaleDateString("en-US", options);
  }
}
