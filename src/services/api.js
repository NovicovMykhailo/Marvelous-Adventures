import axios from 'axios';
import options from './options';
import { filteredQuery, getObjFromParams, urlNormalizer, findTitle } from 'helpers';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  ...options,
});

// Main Page
export const getHomePageComics = async () => {
  const params = new URLSearchParams({
    orderBy: '-focDate',
    startYear: '2022',
    format: 'comic',
    noVariants: 'true',
    hasDigitalIssue: 'true',
    limit: '12',
  });
  const res = await instance.get(`/comics?${params}`);
  return res.data.data;
};

//SearchForm
export const getComics = async searchParams => {
  const searchedValues = filteredQuery(getObjFromParams(searchParams));

  const defaultParams = {
    orderBy: '-focDate',
    format: 'comic',
    limit: 16,
  };

  const title = searchParams.title ? findTitle(searchedValues) : null;
  const paramsToSearch = filteredQuery({ title, ...defaultParams, ...searchedValues });


  const offset = Number(paramsToSearch.page) * Number(paramsToSearch.limit);

  delete paramsToSearch.page;

  const params = new URLSearchParams(paramsToSearch);

  const res = await instance.get(`/comics?${params}&offset=${offset}&noVariants=true`);

  return res.data.data;


  // return new Promise((resolve, reject) => setTimeout(resolve, 5000))

};
//Comic by id
export const getComicsById = async id => {
  //comic data
  const comic = await instance.get(`/comics/${id}`);
  //character photos
  const characters = await instance.get(`/characters?comics=${id}`);

  const writersFiltered = comic.data.data.results[0].creators.items.filter(creator => creator.role === 'writer');
  // get authors photo and info
  const writerObj = await Promise.all(
    writersFiltered.map(async writer => {
      const name = writer.name.split(' ');
      const result = await instance
        .get(`/creators?firstName=${name[0]}&lastName=${name[1]}`)
        .then(result => result.data.data.results[0]);
      return result;
    })
  );
  //get series for stories
  const seriesSelector = comic.data.data.results[0].series.resourceURI;
  const series = await axios.get(urlNormalizer(seriesSelector), options);
  //get storiesList for gallery images
  const storiesSelector = series.data.data.results[0].comics.collectionURI;
  const stories = await axios.get(urlNormalizer(storiesSelector), options);

  const res = {
    result: comic.data.data.results[0],
    creators: writerObj,
    desription: series.data.data.results[0].description,
    characters: characters.data.data.results,
    stories: stories.data.data.results,
  };

  return res;
};

//Character by id
export const getCaracter = async id => {
  const res = await instance.get(`/characters/${id}`);

  const comicsListSelector = res.data.data.results[0].comics.items;
  const storiesSelector = res.data.data.results[0].series.items;

  const comicsData = await Promise.all(
    comicsListSelector
      .reverse()
      .splice(0, 3)
      .map(async ({ resourceURI }) => {
        const result = await axios.get(urlNormalizer(resourceURI), options).then(result => result.data.data.results[0]);
        return result;
      })
  );

  const storiesData = await Promise.all(
    storiesSelector.map(async ({ resourceURI }) => {
      const result = await axios.get(urlNormalizer(resourceURI), options).then(result => result.data.data.results[0]);
      return result;
    })
  );

  const response = {
    character: res.data.data.results[0],
    comicsList: comicsData,
    stories: storiesData,
  };

  return response;
};
