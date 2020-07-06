import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rating: number, args?: any): string {
    let image = './assets/images/lituralia/stars/Star_rating_'
    if (rating < 0) {
      image += '-'
    } else if (rating < 0.5) {
      image += '0'
    } else if (rating < 1) {
      image += '0.5'
    } else if (rating < 1.5) {
      image += '1'
    } else if (rating < 2) {
      image += '1.5'
    } else if (rating < 2.5) {
      image += '2'
    } else if (rating < 3) {
      image += '2.5'
    } else if (rating < 3.5) {
      image += '3'
    } else if (rating < 4) {
      image += '3.5'
    } else if (rating < 4.5) {
      image += '4'
    } else if (rating < 5) {
      image += '4.5'
    } else if (rating === 5) {
      image += '5'
    } else image += '-'
    return image + '_of_5.png';
  }

}
