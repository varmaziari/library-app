import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/base-page';
import { BaseCrudComponent, Column } from "../../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage extends BaseCrudPage<memberItem> implements OnInit {
  override dataService = inject(MembersService);
  ngOnInit(): void {
    this.refreshData();
    this.item = {
      id: 0,
      name: '',
      family: '',
      nationalCode: '',
      phoneNumber: '',
      address: ''
    };
  }
  override addPrepair(): void {
    this.item = {
      id: 0,
      name: '',
      family: '',
      nationalCode: '',
      phoneNumber: '',
      address: ''
    };
  }
  columns: Column[] = [
    { field: 'id', title: 'شناسه' },
    { field: 'name', title: 'نام' },
    { field: 'family', title: 'نام خانوادگی' },
    { field: 'nationalCode', title: 'کدملی' },
    { field: 'phoneNumber', title: 'شماره تلفن' },
    { field: 'address', title: 'آدرس' }
  ]
}
export interface memberItem extends Thing {
  name: string;
  family: string;
  nationalCode: string;
  phoneNumber: string;
  address: string;
}

