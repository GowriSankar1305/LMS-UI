import { Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login',pathMatch:'full'},
    {path: 'login',component: LoginComponent},
    {path: 'registerAccount',component: RegisterComponent},
    {path: 'customer/dashboard',component: CustomerDashboardComponent}
];
