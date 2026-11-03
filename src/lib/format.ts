// Fixed time zone so server and browser always print the same date.
const dateFormat = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  weekday: "long",
  day: "numeric",
  month: "long",
});

export function formatEventDate(iso: string) {
  return dateFormat.format(new Date(iso));
}
