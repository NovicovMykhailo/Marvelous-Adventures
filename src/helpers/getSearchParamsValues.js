export default function getObjFromParams(searchParams) {
  const params = Object.fromEntries(searchParams.entries());

  return params;
}
