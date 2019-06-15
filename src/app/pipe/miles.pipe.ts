import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miles'
})
export class MilesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value * 0.621);
  }

}
