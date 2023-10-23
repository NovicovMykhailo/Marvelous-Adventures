const sizes = {
  Portrait: {
    // 5x4
    portrait_small: '50x75px',
    portrait_medium: '100x150px',
    portrait_xlarge: '150x225px',
    portrait_fantastic: '168x252px',
    portrait_incredible: '216x324px',
    portrait_uncanny: '300x450px',

  },

  Standard: {
    // square
    standard_small: '65x45px',
    standard_medium: '100x100px',
    standard_large: '140x140px',
    standard_amazing: '180x180px',
    standard_xlarge: '200x200px',
    standard_fantastic: '250x250px',

  },

  Landscape: {
    // 16:9
    landscape_small: '120x90px',
    landscape_medium: '175x130px',
    landscape_large: '190x140px',
    landscape_xlarge: '270x200px',
    landscape_amazing: '250x156px',
    landscape_incredible: '464x261px',
  },
  full:{
    // path.exension
  }
};

export function getImage(url) {
  console.log(url)
  const { path, extension, imageSize = 'standard_fantastic' } = url;
  // return `${path}.${extension}`;
  return `${path}/${imageSize}.${extension}`;
}
