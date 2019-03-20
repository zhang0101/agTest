import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sexReform',
})
export class SexReformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'male':
        return '男';
      case 'female':
        return '女';
      default:
        return '不男不女或雌雄同体';
    }
  }

}
