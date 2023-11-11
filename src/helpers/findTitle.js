export default function findTitle(ObjToSort) {
  const arr = Object.entries(ObjToSort).find(x => x[0] === 'title');
  const obj = Object.fromEntries([[arr[0], arr[1]]]);

  return obj;
}
