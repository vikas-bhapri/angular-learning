import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    return value.substring(0, length);
  }

}
