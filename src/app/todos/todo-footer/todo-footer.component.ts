import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../../filtro/filtro.actions';
import { cleanCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss',
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = { filtro: 'all' };
  filtros: actions.filtrosValidos[] = [
    { filtro: 'all' },
    { filtro: 'completed' },
    { filtro: 'pending' },
  ];
  tareasCounter: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.subscribe(state =>{
      this.filtroActual = state.filtro
      this.tareasCounter = state.todos.filter(todo => !todo.completado).length
    });
  }
  changeFilter(filtros: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtroInt: filtros.filtro }));
  }
  cleanAll() {
    this.store.dispatch(cleanCompleted())
  }
}
