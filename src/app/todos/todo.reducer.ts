import { Action, createReducer, on } from '@ngrx/store';
import { crear, toggleCompleted } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Comprar leche'),
  new Todo('Vencer a thanos'),
  new Todo('Chaqueta'),
  new Todo('Terminar el curso'),
  new Todo('Olvidarme de tai'),
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleCompleted, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: Todo[] | undefined, actions: Action) {
  return _todoReducer(state, actions);
}
