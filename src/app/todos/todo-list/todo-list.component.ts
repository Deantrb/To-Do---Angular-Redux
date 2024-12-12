import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtro: filtrosValidos = {filtro:"all"};
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(({todos,filtro}) => {
      this.todos = todos;
      this.filtro = filtro
    });
  }

  transformTodo(): Todo[] {
    switch ( this.filtro.filtro) {
      case 'completed':
        return this.todos.filter((todo) => todo.completado);
      case 'pending':
        return this.todos.filter((todo) => !todo.completado);
      default:
        return this.todos;
    }

  }
}
