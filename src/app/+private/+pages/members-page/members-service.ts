import { Injectable } from '@angular/core';
import { memberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
      private data:memberItem[]=[
        {id:1,name:'علی',family:'حیدری',nationalCode:'3865245698',phoneNumber:'09186957845',address:'همدان'},
        {id:2,name:'صبا',family:'صالحی',nationalCode:'4005245663',phoneNumber:'09306957444',address:'تهران'},
        {id:3,name:'صالح',family:'عباسی',nationalCode:'3702005666',phoneNumber:'09906953333',address:'تبریز'},
        {id:4,name:'پروانه',family:'قیاسی',nationalCode:'3882205734',phoneNumber:'09186952154',address:'همدان'},
      ];
  
      list(){
        return [...this.data];
      }
  
      add(member:memberItem) {
        this.data.push(member);
    }
}
