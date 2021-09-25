export const KEY_STORAGE = {
  mode: "mode",
};

export const setStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const getStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return localStorage.getItem(key);
  }
};

export const deleteStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const deleteAllStorage = () => {
  localStorage.clear();
};