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

axios.defaults.baseURL = 'http://gateway.marvel.com/v1/public/';

export const getCharacters = async () => {
  const res = await axios.get('/characters?offset=10', { params: data });
  return res.data.data;
};

export const getCharacterByName = async (name) => {
    const res = await axios.get(`/characters?name=${name}`, { params: data });
    return res.data.data;
  };

  export const getHomePageChar = async () => {
    // const main ={}
    const res = await axios.get('/characters?modifiedSince=12122023', { params: data });
    return res.data.data;
  }

export const getComics = async () => {
  const res = await axios.get('/comics', { params: data });
  return res.data.results;
};
