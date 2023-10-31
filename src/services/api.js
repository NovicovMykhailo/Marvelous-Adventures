import axios from 'axios';
import options from './options';
import urlNormaliszer from 'helpers/urlNormalizer';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  ...options,
});
//GET ALL
export const getComics = async (page, params) => {
  // const {orderBy, startYear,format, title}= params
  const paramsObj = { orderBy: '-focDate', startYear: '2018', format: 'comic', noVariants: true, limit: '12' };
  const searchParams = new URLSearchParams(paramsObj);
  const offset = page * 12;
  const res = await instance.get(`/comics?${searchParams}&offset=${offset}`);
  return res.data.data;
};
//GET Comic by ID for Modal
export const getComicsById = async id => {
  const comic = await instance.get(`/comics/${id}`);
  const characters = await instance.get(`/characters?comics=${id}`);

  const seriesSelector = comic.data.data.results[0].series.resourceURI;
  const writersFiltered = comic.data.data.results[0].creators.items.filter(creator => creator.role === 'writer');

  const writerObj = await Promise.all(
    writersFiltered.map(async writer => {
      const name = writer.name.split(' ');
      const result = await instance.get(`/creators?firstName=${name[0]}&lastName=${name[1]}`).then(result => result.data.data.results[0]);
      return result;
    })
  );

  const series = await axios.get(urlNormaliszer(seriesSelector), options);
  const storiesSelector = series.data.data.results[0].comics.collectionURI;
  const stories = await axios.get(urlNormaliszer(storiesSelector), options);

  const res = {
    result: comic.data.data.results[0],
    creators: writerObj,
    desription: series.data.data.results[0].description,
    characters: characters.data.data.results,
    stories: stories.data.data.results,
  };

  return res;
};
//GET TOP 12 COMIC for Main Page
export const getHomePageComics = async () => {
  const res = await instance.get('/comics?orderBy=-focDate&startYear=2022&format=comic&noVariants=true&hasDigitalIssue=true&limit=12');
  return res.data.data;
};
//GET Character Info By ID

export const getCaracter = async id => {
  const res = await instance.get(`/characters/${id}`);

  const comicsListSelector = res.data.data.results[0].comics.items;
  const storiesSelector = res.data.data.results[0].series.items;

  const comicsData = await Promise.all(
    comicsListSelector
      .reverse()
      .splice(0, 3)
      .map(async ({ resourceURI }) => {
        const result = await axios.get(urlNormaliszer(resourceURI), options).then(result => result.data.data.results[0]);
        return result;
      })
  );
  const storiesData = await Promise.all(
    storiesSelector.map(async ({ resourceURI }) => {
      const result = await axios.get(urlNormaliszer(resourceURI), options).then(result => result.data.data.results[0]);
      return result;
    })
  );
  console.log('storiesData', storiesData);
  const response = {
    character: res.data.data.results[0],
    comicsList: comicsData,
    stories: storiesData,
  };
  return response;
};
