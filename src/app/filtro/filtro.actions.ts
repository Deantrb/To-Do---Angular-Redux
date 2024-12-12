import {createAction, props} from "@ngrx/store";

export type filtrosValidos = { filtro: 'todos' | 'completados' | 'pendientes' };

export const setFiltro = createAction("[Filtro] Set Filtro",
  props<{ filtroInt:  'todos' | 'completados' | 'pendientes'}>());

