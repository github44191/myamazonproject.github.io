export default function isWeekend(today) {
  let day = today.format('dddd');
  return day === 'Sunday' || day === 'Saturday';
}