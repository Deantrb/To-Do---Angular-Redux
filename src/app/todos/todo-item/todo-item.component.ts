import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  @Input() todo!: Todo;
  chkCompleted: boolean = false;
  txtEdit!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('todos').subscribe((todos) => {
      // this.chkCompleted = new FormControl(todos.find(todo => todo.id === this.todo.id)?.completado);
    });
    this.txtEdit = new FormControl(this.todo.texto, Validators.required);
  }
  toggleCompletedCheck() {
    this.store.dispatch(actions.toggleCompleted({ id: this.todo.id }));
  }
  editar() {
    this.editando = true;
    this.txtEdit.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEditing() {
    this.editando = false;

    if (this.txtEdit.invalid) return;
    if (this.txtEdit.value === this.todo.texto) return;

    this.store.dispatch(
      actions.editingTodo({ id: this.todo.id, texto: this.txtEdit.value })
    );
  }
  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
