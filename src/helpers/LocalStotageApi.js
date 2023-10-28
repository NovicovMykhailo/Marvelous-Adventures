export const readFromLocalStorage = key => {
  const item = sessionStorage.getItem(`${key}`);
  return JSON.parse(item);
};

export const writeToLocalStorage = (key, obj) => {
  sessionStorage.setItem(`${key}`, JSON.stringify(obj));
  return true;
};
