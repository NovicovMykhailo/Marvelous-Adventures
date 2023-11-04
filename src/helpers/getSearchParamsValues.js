export default function getObjFromParams(searchParams) {
  return {
    title: searchParams.get('title') || null,
    orderBy: searchParams.get('orderBy') || null,
    startYear: searchParams.get('startYear') || null,
    format: searchParams.get('format') || null,
    page: searchParams.get('page') || null,
    limit: searchParams.get('limit') || null,
  };
}
