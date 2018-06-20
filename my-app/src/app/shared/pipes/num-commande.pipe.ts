import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'numCommande'
})
export class NumCommandePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${this.format(args)}-${value}`;
  }

  private format(state: State): string {
    return state.toUpperCase().replace(' ', '').substr(0, 2);
  }
}
