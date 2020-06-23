import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string{   
    const splitString = value.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    
    return joinArray;
  }

}
