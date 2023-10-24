import axios from 'axios';
import md5 from 'md5';
const privateKey = '7cda939940a8cd5127c1e0d689c3421b8a614699';
const publicKey = '75eaafee01362a4f58f707d697eb0ab4';
const ts = Date.now();

const data = {
  ts,
  apikey: publicKey,
  hash: md5(ts + privateKey + publicKey),

};

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    headers: {
        'Accept': '*/*'
    },
params: {...data}
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
      const result = 
instance.get(`/creators?firstName=${name[0]}&lastName=${name[1]}`)
        .then(result => result.data.data.results[0]);
      return result;
    })
  );
  const serials = await instance.get(series);

  const stories = serials.data.data.results[0].comics.collectionURI;
  const storiesF = await instance.get(stories);

  const characters = await instance.get(`/comics/${id}/characters`);

  const res = {
    result: comic.data.data.results[0],
    creators: writerObj,
    characters: characters.data.data.results,
    stories: storiesF.data.data.results
  };

  return res;
};

export const getHomePageChar = async () => {
  // const main ={}
  const res = await axios.get('/comics?modifiedSince=12122023', {
    params: data,
  });
  return res.data.data;
};

export const getCarackters = async () => {
  // const main ={}
  const res = await axios.get('/comics?modifiedSince=12122023', {
    params: data,
  });
  return res.data.data;
};
