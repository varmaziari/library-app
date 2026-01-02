import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { Thing } from '../../../+shared/+base/base-thing';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {
  membersService = inject(MembersService);
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
    if (this.state == 'add') {
      this.membersService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.membersService.update(this.item);
    }
    else if (this.state == 'remove') {
      this.membersService.remove(this.item);
    }
    this.refreshData();
    this.state = 'list'
  }
  refreshData() {
    this.data = this.membersService.list();
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
  edit(member: memberItem) {
    this.item = { ...member };
    this.state = 'edit';
  }
  remove(member: memberItem) {
    this.item = { ...member };
    this.state = 'remove';
  }
}
export interface memberItem extends Thing {
  name: string;
  family: string;
  nationalCode: string;
  phoneNumber: string;
  address: string;
}

