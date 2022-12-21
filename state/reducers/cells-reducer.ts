import { produce } from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../cell";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  }
};

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
}

const CellsReducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL: {
      const { id, content } = action.payload;
      state.data[id].content = content;
      return;

      // Example for state manipultion without immer
      // return {
      //   ...state, data: {
      //     ...state.data,
      //     [id]: { ...state.data[id], content: content }
      //   }
      // }
    }

    case ActionType.DELETE_CELL: {
      const id = action.payload;

      delete state.data[id];
      // state.order = state.order.filter(cellId => cellId !== id);
      const index = state.order.findIndex(cellId => cellId === id);
      if (index !== -1) state.order.splice(index, 1);
      return;
    }

    case ActionType.MOVE_CELL: {
      const { id, direction } = action.payload;

      const idx = state.order.indexOf(id);
      const targetIdx = direction === "down" ? idx + 1 : idx - 1;

      if (targetIdx < 0 || targetIdx > state.order.length - 1) return;

      state.order[idx] = state.order[targetIdx];
      state.order[targetIdx] = id;
      return;
    }

    case ActionType.INSERT_CELL_BEFORE: {
      const { id: currentCellId, type } = action.payload;
      const cell: Cell = {
        id: randomId(),
        type,
        content: "",
      }

      state.data[cell.id] = cell;

      const currentCellIdx = state.order.findIndex(id => id === currentCellId);

      if (currentCellIdx < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(currentCellIdx, 0, cell.id);
      }

      return;
    }

    case ActionType.INSERT_CELL_AFTER: {
      const { id: currentCellId, type } = action.payload;
      const cell: Cell = {
        id: randomId(),
        type,
        content: "",
      }

      state.data[cell.id] = cell;

      const currentCellIdx = state.order.findIndex(id => id === currentCellId);

      if (currentCellIdx < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(currentCellIdx + 1, 0, cell.id);
      }

      return;
    }

    default:
      return state;
  }
}, initialState);

export default CellsReducer;

function randomId() {
  return Math.random().toString(36).substring(2,7);
  //return Math.random().toString(36).substr(2, 5);
}
