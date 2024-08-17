import { Component } from '@angular/core';
import { Member } from '../../../../types/Member';
import { MemberAddress } from '../../../../types/MemberAddress';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,FormsModule],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css'
})
export class AddMemberComponent {

  newMember : Member = new Member();
  addrs : MemberAddress = new MemberAddress();
  btnContent : string = 'Add member';
  btnDisabled : boolean = false;
  constructor(private adminService : AdminService) {

  }

  addMemberToSystem() : void  {
    console.log(this.newMember);
    console.log(this.addrs);
    this.adminService.callAddMemberApi(this.newMember).subscribe({
      next : response => {
        
      }
    });
  }
}
