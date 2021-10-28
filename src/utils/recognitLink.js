// eslint-disable-next-line no-useless-escape
const reg = /((http|ftp|https):\/\/)?(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,4})*(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/g;

const recognitLink = (str) => {
  const matchedStr = [...str.matchAll(reg)].map((sm) => sm[0]);
  if (matchedStr.length === 0) {
    return [str];
  }
  const result = [];

  const fn = (fnStr, link, index) => {
    const splitedFnStr = fnStr.split(link);
    if (splitedFnStr.length <= 1) {
      result.push(splitedFnStr[0]);
    }
    if (splitedFnStr.length > 1) {
      result.push(splitedFnStr[0]);
      result.push({ link });
      if (matchedStr.length - 1 === index) {
        result.push(splitedFnStr[1]);
      }
    }
  };

  matchedStr.reduce((splitedStr, ms, index) => {
    fn(splitedStr, ms, index);
    return splitedStr.split(ms)[1];
  }, str);

  return result;
};

export default recognitLink;
