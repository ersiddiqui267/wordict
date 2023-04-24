import View from "./view";

class ResultView extends View {
  _parentElement = document.querySelector(`.main`);

  _generateMarkup() {
    return this._data
      .map((data, i, arr) => {
        const {
          hwi: { hw, prs },
          fl,
          ins,
          def,
        } = data;

        return `
        <div class="p-8 border-b-2">
          <div class="main--container-headword flex items-end flex-wrap gap-3">
            <span class="headword font-serif font-semibold text-4xl">${hw.replaceAll(
              `*`,
              ``
            )}</span>
            <span class="rounded-md p-2 bg-gray-200 text-gray-500 font-semibold">${
              i + 1
            } of ${arr.length}</span>
            <span class="headword-label font-serif font-semibold text-primary text-2xl"
              >${fl ?? ``}</span
            >
          </div>
          <div class="main--container-prons my-4">
            <span class="pron mr-3 text-gray-500">${hw.replaceAll(
              `*`,
              `·​`
            )}</span>
            <span>
              ${
                prs
                  ?.map((pron) => {
                    if (pron.sound)
                      return `
                  <span class="btn-pron rounded-full px-3 border-2 border-cyan-600 text-cyan-700">${pron.mw}</span>
                `;
                    else
                      return `
                    <span class="pron px-3 text-gray-500">${pron.mw}</span>
                `;
                  })
                  .join(``) ?? ``
              }
            </span>
          </div>
      
          <div class="main--container-inflictions">
            ${
              ins
                ?.map((inf) => {
                  return `
              <div class="my-3">
              ${
                inf.il
                  ? `<span class="badge-infliction rounded-md p-1 bg-gray-200 font-semibold">${inf.il}</span>`
                  : ``
              }
                
                <span class="value-infliction font-bold text-gray-700">${inf.if.replaceAll(
                  `*`,
                  ``
                )}</span>
              </div>
              `;
                })
                .join(``) ?? ``
            }
          </div>
      
          <div>
            ${
              def
                ?.map((eg) => {
                  const { sseq, vd } = eg;
                  return `
                <div class="border-b-2 mt-5">
                  ${vd ? `<h3><em class="text-cyan-600">${vd}</em></h3>` : ``}
                  ${sseq[0]
                    ?.map((arr, i) => {
                      return `
                    <div class="my-6">
                      <p><span class="p-1 rounded-md font-semibold bg-gray-200">${
                        i + 1
                      }</span> <strong>:</strong> ${
                        typeof arr[1]?.dt?.[0]?.[1] === `string`
                          ? (arr[1]?.dt?.[0]?.[1]).replace(
                              /\{[\/(\w)]+\}/g,
                              ` `
                            ) ?? ``
                          : arr[1]?.dt?.[0]?.[1]?.[0]?.[0]?.[1].replace(
                              /\{[\/(\w)]+\}/g,
                              ` `
                            ) ?? ``
                      }</p>
                      <p class="mt-2 text-slate-600">${
                        arr[1]?.dt?.[1]?.[1]?.[0]?.t?.replace(
                          /\{[\/(\w)]+\}/g,
                          ` `
                        ) ?? ``
                      }</p>
                    </div>
                    `;
                    })
                    .join(``)}
                </div>
                `;
                })
                .join(``) ?? ``
            }
          </div>
        </div>
        `;
      })
      .join(``);
  }
}

export default new ResultView();
