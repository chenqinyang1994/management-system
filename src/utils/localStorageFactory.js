function localStorageFactory(defaultValue, key) {
  let currentValue = localStorage.getItem(key) || defaultValue;

  const set = (value) => {
    currentValue = value;
    localStorage.setItem(key, value);
  };

  const get = (force) => {
    return force ? localStorage.getItem(key) : currentValue;
  };

  const remove = () => {
    currentValue = undefined;
    localStorage.removeItem(key);
  };

  return {
    set,
    get,
    remove,
  };
}

export default localStorageFactory;
