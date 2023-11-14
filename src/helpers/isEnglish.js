export default function isEnglish(event) {
  if (/[A-Za-z0-9 ]/.test(event)) {
    return event;
  } else {
    return '';
  }
}
