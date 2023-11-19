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
};

//Comic by id
export const getComicsById = async id => {
  //comic data
  const fetchComic = async id => {
    return await instance.get(`/comics/${id}`);
  };
  //character photos
  const fetchCharacters = async () => {
    return await instance.get(`/characters?comics=${id}`);
  };
  // get authors
  const fetchAuthors = async comic => {
    const writersFiltered = comic.data.data.results[0].creators.items.filter(creator => creator.role === 'writer');
    return await Promise.all(
      writersFiltered.map(async writer => {
        const name = writer.name.split(' ');
        const result = await instance
          .get(`/creators?firstName=${name[0]}&lastName=${name[1]}`)
          .then(result => result.data.data.results[0]);
        return result;
      })
    );
  };
  //get series for stories
  const fetchSeries = async comic => {
    const seriesSelector = comic.data.data.results[0].series.resourceURI;
    return await axios.get(urlNormalizer(seriesSelector), options);
  };
  // Optimizing fetches
  const [comic, characters] = await Promise.all([fetchComic(id), fetchCharacters(id)]);
  const [writerObj, series] = await Promise.all([fetchAuthors(comic), fetchSeries(comic)]);

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

  const getComicData = async res => {
    const comicsListSelector = res.data.data.results[0].comics.items;
    return await Promise.all(
      comicsListSelector
        .reverse()
        .splice(0, 3)
        .map(async ({ resourceURI }) => {
          const result = await axios
            .get(urlNormalizer(resourceURI), options)
            .then(result => result.data.data.results[0]);
          return result;
        })
    );
  };
  const getStoriesData = async res => {
    const storiesSelector = res.data.data.results[0].series.items;
    return await Promise.all (storiesSelector.map(async ({ resourceURI }) => {
      const result = await axios.get(urlNormalizer(resourceURI), options).then(result => result.data.data.results[0]);
      return result
    }));
  };

  const [comicsData, storiesData] = await Promise.all([getComicData(res), getStoriesData(res)]);

  const response = {
    character: res.data.data.results[0],
    comicsList: comicsData,
    stories: storiesData,
  };


  return response;
};
