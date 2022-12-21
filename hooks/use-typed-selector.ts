import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useSelect: TypedUseSelectorHook<RootState> = useSelector;