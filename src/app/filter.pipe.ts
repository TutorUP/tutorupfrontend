import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
    name: 'filterBy'
})

// return subset of array of items that contains the searchText string
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}
