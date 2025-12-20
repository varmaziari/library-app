import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {
  booksService = inject(MembersService);
  data: memberItem[] = []
  state: string = 'list';
  item: memberItem = {
    id: 0,
    name: '',
    family: '',
    nationalCode: '',
    phoneNumber: '',
    address: '',
  };
  save() {
    this.booksService.add(this.item);
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
      name: '',
      family: '',
      nationalCode: '',
      phoneNumber: '',
      address: '',
    };
  }
}
export interface memberItem {
  id: number;
  name: string;
  family: string;
  nationalCode: string;
  phoneNumber: string;
  address: string;
}

