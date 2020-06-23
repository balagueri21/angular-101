import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }
    
    return value.sort(this.compare);
  }

  compare(a: any, b: any) {
    // Use toUpperCase() to ignore character casing
    const serverA = a.name.toUpperCase();
    const serverB = b.name.toUpperCase();
  
    let comparison = 0;
    if (serverA > serverB) {
      comparison = 1;
    } else if (serverA < serverB) {
      comparison = -1;
    }
    return comparison;
  }

}
