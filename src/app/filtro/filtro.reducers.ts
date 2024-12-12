import {Action, createReducer, on} from "@ngrx/store";
import {filtrosValidos, setFiltro} from "./filtro.actions";


export const initialState: filtrosValidos = {filtro: 'todos'};
const _filtroReducer = createReducer(initialState,
  on(setFiltro, (state, {filtroInt}) => ({...state,
  filtro:filtroInt}))
);

export function filtroReducer(state: filtrosValidos| undefined, action: Action) {
  return _filtroReducer(state, action);
}
