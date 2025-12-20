import { Component, inject, input, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage implements OnInit {
  booksService = inject(BooksService);
  data: bookItem[] = []
  state: string = 'list';
  item: bookItem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0
  };
  save() {
    if (this.state == 'add') {
      this.booksService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.booksService.update(this.item);
    }
    else if (this.state == 'remove') {
      this.booksService.remove(this.item);
    }
    this.refreshData();
    this.state = 'list'
  }
  refreshData() {
    this.data = this.booksService.list();
  }
  cancel() {
    this.state = 'list'
  }
  ngOnInit(): void {
    this.refreshData();
  }
  add() {
    this.state = "add"
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0
    };
  }
  edit(book: bookItem) {
    this.item = { ...book };
    this.state = 'edit';
  }
  remove(book: bookItem) {
    this.item = { ...book };
    this.state = 'remove';
  }
}
export interface bookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
