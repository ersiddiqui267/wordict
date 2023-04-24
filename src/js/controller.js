import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model";
import searchView from "./view/searchView";
import resultView from "./view/resultView";

const controlSearch = async function (query) {
  try {
    if (!query) return;
    resultView.renderSpinner();
    await model.search(query);
    resultView.render(model.state.results);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  searchView.addHandler(controlSearch);
};

init();
