import { Injectable } from '@angular/core';
import { bookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
    private data:bookItem[]=[
      {id:1,title:'مدار منطقی', writer:'فاطمه احمدی', publisher:'ارمغان', price:200000},
      {id:2,title:' برنامه نویسی', writer:'زهرا محمدی', publisher:'چابک', price:400000},
      {id:3,title:'پایگاه داده ', writer:'علی رضایی', publisher:'ارمغان', price:380000},
      {id:4,title:' طراحی وب ', writer:'حدیث بابایی', publisher:'نو', price:285000},
    ];

    list(){
      return [...this.data];
    }

    add(book:bookItem) {
      this.data.push(book);
  }
}
