import { Component, inject, input, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { disabled } from '@angular/forms/signals';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage extends BaseCrudPage<bookItem> implements OnInit {
  override dataService = inject(BooksService);

  ngOnInit(): void {
    this.refreshData();
  }
  override addPrepair(): void {
    this.item = {
      id:0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    }
  }
}
export interface bookItem extends Thing {
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
