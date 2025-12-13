import { Injectable } from '@angular/core';
import { bookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
    private data:bookItem[]=[
      {id:1,title:'مدار منطقی', writer:'فاطمه احمدی', publisher:'ارمغان', price:200000},
      {id:2,title:'مدار منطقی', writer:'زهرا محمدی', publisher:'چابک', price:400000},
      {id:3,title:'مدار منطقی', writer:'علی رضایی', publisher:'ارمغان', price:380000},
    ];

    list(){
      return [...this.data];
    }

    add(book:bookItem) {
      this.data.push(book);
  }
}
