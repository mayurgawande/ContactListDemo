import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;
    console.log('items',items);
    console.log('searchText',searchText);
   
    return  items.filter(it => {
         return it.firstName.toLowerCase().includes(searchText) || 
         it.lastName.toLowerCase().includes(searchText);
       });
  }
}
