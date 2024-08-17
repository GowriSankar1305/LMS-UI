import { Component } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { MembershipType } from '../../../../types/MembershipType';
import { AppConstants } from '../../../../types/AppConstants';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-membership-type',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,CommonModule],
  templateUrl: './view-membership-type.component.html',
  styleUrl: './view-membership-type.component.css'
})
export class ViewMembershipTypeComponent {

  constructor(private adminService: AdminService) {
    this.getMembershipTypeDetails();
  }
  membershipTypes : MembershipType[] = [];

  getMembershipTypeDetails()  {
    this.adminService.callfetchMembershipTypesApi().subscribe({
      next: response => {
        this.membershipTypes = response;
      },
      error : errResp =>  {
        console.log(errResp);
      }
    })
  }

}
