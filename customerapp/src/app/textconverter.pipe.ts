import { Pipe, PipeTransform } from '@angular/core';

// {{firstName | convert:'upper'}}
// {{hireDate |format:'dd-MM-yyyy'}}
@Pipe({
  name: 'convert'
})
export class TextconverterPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(args[0] === 'upper') {
      return value.toUpperCase();
    } else if (args[0] === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }

}
