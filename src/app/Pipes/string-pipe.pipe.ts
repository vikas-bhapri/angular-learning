import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(value: string, length?: number): unknown {
    if(!length){
      length = 30;
    }
    return value.substring(0, length);
  }

}
