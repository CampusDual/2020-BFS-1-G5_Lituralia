import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return getImageSrc(value);
  }

}

export function getImageSrc(base64: any) {
  return 'data:image/png;base64,' + base64;
}