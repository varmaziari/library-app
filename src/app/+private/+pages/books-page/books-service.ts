import { Injectable } from '@angular/core';
import { bookItem } from './books-page';
import { BaseCrudService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseCrudService<bookItem> {
  override data: bookItem[] = [
    { id: 1, title: 'مدار منطقی', writer: 'فاطمه احمدی', publisher: 'ارمغان', price: 200000 },
    { id: 2, title: ' برنامه نویسی', writer: 'زهرا محمدی', publisher: 'چابک', price: 400000 },
    { id: 3, title: 'پایگاه داده ', writer: 'علی رضایی', publisher: 'ارمغان', price: 380000 },
    { id: 4, title: ' طراحی وب ', writer: 'حدیث بابایی', publisher: 'نو', price: 285000 },
  ];
  override edit(destination: bookItem, source: bookItem): void {
    destination.title=source.title;
    destination.writer=source.writer;
    destination.publisher=source.publisher;
    destination.price=source.price;
  }
}
