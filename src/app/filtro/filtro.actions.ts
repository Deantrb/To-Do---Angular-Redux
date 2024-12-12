import {createAction, props} from "@ngrx/store";

export type filtrosValidos = { filtro: 'all' | 'completed' | 'pending' };

export const setFiltro = createAction("[Filtro] Set Filtro",
  props<{ filtroInt:  'all' | 'completed' | 'pending'}>());

