import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddBookComponent } from './admin/book/add-book/add-book.component';
import { ViewBookComponent } from './admin/book/view-book/view-book.component';
import { BooksListComponent } from './admin/book/books-list/books-list.component';
import { AddLoanComponent } from './admin/loan/add-loan/add-loan.component';
import { ViewLoanComponent } from './admin/loan/view-loan/view-loan.component';
import { LoansListComponent } from './admin/loan/loans-list/loans-list.component';
import { ViewReservationComponent } from './admin/reservation/view-reservation/view-reservation.component';
import { ReservationListComponent } from './admin/reservation/reservation-list/reservation-list.component';
import { AddFineComponent } from './admin/fine/add-fine/add-fine.component';
import { FineListComponent } from './admin/fine/fine-list/fine-list.component';
import { AddMembershipTypeComponent } from './admin/membership/add-membership-type/add-membership-type.component';
import { ViewMembershipTypeComponent } from './admin/membership/view-membership-type/view-membership-type.component';
import { AddMembershipComponent } from './admin/membership/add-membership/add-membership.component';
import { ViewMembershipComponent } from './admin/membership/view-membership/view-membership.component';
import { AddCategoryComponent } from './admin/book/add-category/add-category.component';
import { AddMemberComponent } from './admin/membership/add-member/add-member.component';
import { ViewMemberComponent } from './admin/membership/view-member/view-member.component';
import { MemberListComponent } from './admin/membership/member-list/member-list.component';

export const routes: Routes = [
    {path: '',redirectTo: '/login',pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'admin/dashboard',component: DashboardComponent},
    {path: 'admin/addBook',component: AddBookComponent},
    {path: 'admin/viewBook',component: ViewBookComponent},
    {path: 'admin/booksList',component: BooksListComponent},
    {path: 'admin/issueBookLoan',component: AddLoanComponent},
    {path: 'admin/viewLoanDetails',component: ViewLoanComponent},
    {path: 'admin/viewLoanListing',component: LoansListComponent},
    {path: 'admin/viewReservationDetails',component: ViewReservationComponent},
    {path: 'admin/reservationsList',component : ReservationListComponent},
    {path: 'admin/addFine',component: AddFineComponent},
    {path: 'admin/viewFine',component: AddFineComponent},
    {path: 'admin/fineList',component: FineListComponent},
    {path: 'admin/addMembershipType',component: AddMembershipTypeComponent},
    {path: 'admin/viewMembershipType',component: ViewMembershipTypeComponent},
    {path: 'admin/addMembership',component: AddMembershipComponent},
    {path: 'admin/viewMembership',component: ViewMembershipComponent},
    {path: 'admin/addCategory',component: AddCategoryComponent} ,
    {path: 'admin/addMember',component: AddMemberComponent},
    {path: 'admin/viewMember',component: ViewMemberComponent},
    {path: 'admin/membersList',component: MemberListComponent} 
];
