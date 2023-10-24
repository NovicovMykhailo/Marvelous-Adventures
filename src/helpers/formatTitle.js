export default function formatTitle(title) {
  const index = title.indexOf('#');
  return title.slice(0, index+3);
}
