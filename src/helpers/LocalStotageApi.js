export const readFromLocalStorage = key => {
  const item = localStorage.getItem(`${key}`);
  return JSON.parse(item);
};

export const writeToLocalStorage = (key, obj) => {
  localStorage.setItem(`${key}`, JSON.stringify(obj));
  return true;
};
