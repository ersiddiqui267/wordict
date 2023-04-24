import { TIMEOUT } from "./config";

const timer = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(`Request took too long!`);
    }, sec * 1000);
  });
};

const AJAX = async function (url) {
  try {
    const fetchPro = fetch(url);
    const response = await Promise.race([fetchPro, timer(TIMEOUT)]);
    if (!response.ok) throw new Error(`Try another word!`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export default AJAX;
