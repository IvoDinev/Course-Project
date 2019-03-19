import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propname: string) : any {
    if(value.length === 0 || filterString.toLowerCase() === '' ) {
      return value;
    }const resultArr = [];
    for (const item of value) {
      
      if(item[propname].toLowerCase().includes(filterString.toLowerCase())) {
        resultArr.push(item);
      }
      
    }
    return resultArr;
  }

}
