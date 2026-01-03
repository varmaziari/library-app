import { Component, inject, input, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { disabled } from '@angular/forms/signals';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/base-page';
import { BaseCrudComponent, Column } from "../../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, DecimalPipe, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage extends BaseCrudPage<bookItem> implements OnInit {
  override dataService = inject(BooksService);

  ngOnInit(): void {
    this.refreshData();
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
  }
  override addPrepair(): void {
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
  }
  columns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'title', title: 'عنوان' },
    { field: 'writer', title: 'نویسنده' },
    { field: 'publisher', title: 'ناشر' },
    { field: 'price', title: 'قیمت' },
  ];
}
export interface bookItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
