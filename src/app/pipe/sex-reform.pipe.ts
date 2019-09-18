import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sexReform',
})
export class SexReformPipe implements PipeTransform {

  transform(num: any, args?: any): any {
      let result = [ ], counter = 0;
      num = (num || 0).toString().split('');
      for (var i = num.length - 1; i >= 0; i--) {
          counter++;
          result.unshift(num[i]);
          if (!(counter % 3) && i != 0) { result.unshift(','); }
      }
      return result.join('');
  }

}
