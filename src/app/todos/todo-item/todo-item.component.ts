import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { editingTodo, toggleCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  @Input() todo!: Todo;
  chkCompleted!: FormControl;
  txtEdit!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkCompleted = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.texto, Validators.required);

    this.chkCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(toggleCompleted({ id: this.todo.id }));
    });
  }
  editar() {
    this.editando = true;
    this.txtEdit.setValue(this.todo.texto)


    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEditing() {
    this.editando = false;

    if(this.txtEdit.invalid) return
    if(this.txtEdit.value === this.todo.texto) return

    this.store.dispatch(
      editingTodo({ id: this.todo.id, texto: this.txtEdit.value })
    );
  }
}
