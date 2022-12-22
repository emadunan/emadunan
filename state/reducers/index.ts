import { combineReducers } from "redux";
import bundlesReducer from "./bundles-reducer";
import CellsReducer from "./cells-reducer";

const reducers = combineReducers({
  cells: CellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
