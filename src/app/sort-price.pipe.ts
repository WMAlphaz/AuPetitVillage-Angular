import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortPrice'
})
export class SortPricePipe implements PipeTransform {
  transform(products: any[], triPrix: string): any[] {
   
    if (triPrix === 'ascending') {
      products.sort((a, b) => a.prix > b.prix ? 1 : -1);
    } else if (triPrix === 'descending') {
      products.sort((a, b) => a.prix < b.prix ? 1 : -1);
    }

    return products;
  }

}
