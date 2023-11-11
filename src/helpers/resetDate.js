export default function resetDate(startDate) {
  return startDate ? new Date(startDate).getFullYear() : null;
}
