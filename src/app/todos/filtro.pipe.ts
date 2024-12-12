import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log(value)
    return null;
  }

}
