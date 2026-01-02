import { Injectable } from '@angular/core';
import { memberItem } from './members-page';
import { BaseCrudService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCrudService<memberItem> {
  override data: memberItem[] = [
    { id: 1, name: 'علی', family: 'حیدری', nationalCode: '3865245698', phoneNumber: '09186957845', address: 'همدان' },
    { id: 2, name: 'صبا', family: 'صالحی', nationalCode: '4005245663', phoneNumber: '09306957444', address: 'تهران' },
    { id: 3, name: 'صالح', family: 'عباسی', nationalCode: '3702005666', phoneNumber: '09906953333', address: 'تبریز' },
    { id: 4, name: 'پروانه', family: 'قیاسی', nationalCode: '3882205734', phoneNumber: '09186952154', address: 'همدان' },
  ];
  override edit(destination: memberItem, source: memberItem): void {
    destination.name = source.name;
    destination.family = source.family;
    destination.nationalCode = source.nationalCode;
    destination.phoneNumber = source.phoneNumber;
    destination.address = source.address;
  }
}
