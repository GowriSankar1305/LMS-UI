import { Component } from '@angular/core';
import { MembershipType } from '../../../../types/MembershipType';
import { AdminService } from '../../../../services/admin.service';
import { AppConstants } from '../../../../types/AppConstants';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-add-membership-type',
  standalone: true,
  imports: [FormsModule,HeaderComponent,SidebarComponent],
  templateUrl: './add-membership-type.component.html',
  styleUrl: './add-membership-type.component.css'
})
export class AddMembershipTypeComponent {

  constructor(private adminService: AdminService) {

  }

  mbspType : MembershipType = new MembershipType();
  isBtnDisabled : boolean = false;
  btnContent : string = 'Add membership type';
  successMsg : string = '';
  errorMsg : string = '';

  createNewMembershipType() {
    this.isBtnDisabled = true;
    this.btnContent = AppConstants.BTN_CONTENT;
    this.adminService.callCreatemembershipTypeApi(this.mbspType).subscribe({
      next: response => {
        this.mbspType = new MembershipType();
        console.log(response);
        this.successMsg = response.message;
        this.isBtnDisabled = false;
        this.btnContent = 'Add membership type';
      },
      error: errResp => {
        console.log(errResp);
        this.isBtnDisabled = false;
        this.btnContent = 'Add membership type';
        this.errorMsg = 'Unable to add membership type';
      }
    });
  }
}
