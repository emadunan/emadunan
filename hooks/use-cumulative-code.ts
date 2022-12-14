import { useSelect } from "./use-typed-selector";

export const useCumulativeCode = (cellId: string) => {
  return useSelect(state => {
    const { data, order } = state.cells;

    const orderedCells = order.map(id => data[id]);

    const showFn = `
    import _React from "react";
    import _ReactDOM from "react-dom";

    var show = (value) => {
      const rootEl = document.querySelector("#root");
      
      if (typeof value === "object") {
        if (value.$$typeof && value.props) {
          _ReactDOM.render(value, rootEl);
        } else {
          rootEl.innerHTML = JSON.stringify(value);
        }
      } else {
        rootEl.innerHTML = value;
      }
    };
    `;

    const showFnNoop = `var show = () => {};`;

    const cumulativeCode = [];

    for (const c of orderedCells) {
      if (c.type === "code") {

        if (c.id === cellId) {
          cumulativeCode.push(showFn);
        } else {
          cumulativeCode.push(showFnNoop);
        }

        cumulativeCode.push(c.content);
      }

      if (c.id === cellId) {
        break;
      }
    }

    return cumulativeCode
  }).join("\n");
}