import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    const searchTerm = args[0].trim().toLowerCase();
    return searchTerm ? value.filter(item => item.name.toLowerCase().indexOf(searchTerm) !== -1) : value;
  }
}
