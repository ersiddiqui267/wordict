import { API_URL, KEY } from "./config";
import AJAX from "./helper";

export const state = {
  results: [],
};

export const search = async function (query) {
  try {
    const data = await AJAX(`${API_URL}${query}?key=${KEY}`);
    state.results = data;
  } catch (err) {
    throw err;
  }
};
