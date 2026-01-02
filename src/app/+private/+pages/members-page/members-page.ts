import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/base-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage extends BaseCrudPage<memberItem> implements OnInit {
  override dataService = inject(MembersService);
  ngOnInit(): void {
    this.refreshData();
  }
  override addPrepair(): void {
    this.item = {
      id: 0,
      name: '',
      family: '',
      nationalCode: '',
      phoneNumber: '',
      address: ''
    }
  }
}
export interface memberItem extends Thing {
  name: string;
  family: string;
  nationalCode: string;
  phoneNumber: string;
  address: string;
}

