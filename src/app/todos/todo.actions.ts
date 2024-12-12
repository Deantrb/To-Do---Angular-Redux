import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const toggleCompleted = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editingTodo = createAction(
  '[TODO] Change Text',
  props<{ id: number; texto: string }>()
);
export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All',
  props<{ completed: boolean }>()
);

export const cleanCompleted = createAction('[TODO] Clean Completed');
