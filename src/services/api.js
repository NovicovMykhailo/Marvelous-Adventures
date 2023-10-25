import axios from 'axios';
import options from './options';
import urlNormaliszer from 'helpers/urlNormalizer';
// import selector from 'helpers/selector';




const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  ...options
});

export const getComics = async () => {
  const res = await instance.get('/comics?orderBy=-focDate&startYear=2020');
  return res.data.data;
};

export const getComicsById = async id => {
  const comic = await instance.get(`/comics/${id}`);
  const series = comic.data.data.results[0].series.resourceURI;

  const writers = comic.data.data.results[0].creators.items.filter(creator => creator.role === 'writer');

  const writerObj = await Promise.all(
    writers.map(async writer => {
      const name = writer.name.split(' ');
      const result = await instance.get(`/creators?firstName=${name[0]}&lastName=${name[1]}`).then(result => result.data.data.results[0]);
      return result;
    })
  );
  console.log(urlNormaliszer(series))
  const serials = await axios.get(urlNormaliszer(series),  options);

  const stories = serials.data.data.results[0].comics.collectionURI;
 
  const storiesF = await axios.get(urlNormaliszer(stories),  options);

  const characters = await instance.get(`/comics/${id}/characters`);

  const res = {
    result: comic.data.data.results[0],
    creators: writerObj,
    characters: characters.data.data.results,
    stories: storiesF.data.data.results,
  };

  return res;
};

// export const getHomePageChar = async () => {
//   // const main ={}
//   const res = await instance.get('/comics?modifiedSince=12122023');
//   return res.data.data;
// };

// export const getCarackters = async () => {
//   // const main ={}
//   const res = await instance.get('/comics?modifiedSince=12122023');
//   return res.data.data;
// };
