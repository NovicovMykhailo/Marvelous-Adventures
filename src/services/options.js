import md5 from 'md5';
const privateKey = '7cda939940a8cd5127c1e0d689c3421b8a614699';
const publicKey = '75eaafee01362a4f58f707d697eb0ab4';
const ts = Date.now();

const data = {
  ts,
  apikey: publicKey,
  hash: md5(ts + privateKey + publicKey),
};
const header = { Accept: '*/*' };

const options = {
  params: data,
  headers: header,
};

export default options