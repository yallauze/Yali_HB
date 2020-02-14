import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharPipe'
})
export class FirstCharPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const nameTab = value.split(' ');
    let stringReturn = "";
    nameTab.forEach((element: string) => {
      if (element[0]){
        stringReturn += element[0];
      }
    });
    return stringReturn;
  }

}
