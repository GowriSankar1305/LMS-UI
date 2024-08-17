import { Component } from '@angular/core';
import { LoginRequest } from '../types/LoginRequest';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router, RouterModule } from '@angular/router';
import { AppConstants } from '../types/AppConstants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: LoginRequest = new LoginRequest();
  showError: boolean = false;
  isDisabled: boolean = false;
  buttonContent: string = 'Login';

  constructor(private authService : AuthService,
              private tokenService: TokenService,
              private router: Router)  {

  }

  public loginTheUser() : void {
      console.log("form submittedd--->",this.login);
      if(this.login.userName.trim() === '' || this.login.userPassword.trim() === '')  {
        this.showError = true;
        this.isDisabled = false;
        this.buttonContent = 'Login';
        return;
      }
      this.showError = false;
      this.isDisabled = true;
      this.buttonContent = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
      this.authService.loginTheUser(this.login).subscribe({
        next: successResponse => {
          console.log(successResponse);
          this.tokenService.addToken(AppConstants.TOKEN_KEY,successResponse.token);
          this.router.navigate(['/admin/dashboard']);
        },
        error: errorResponse => {
          console.error(errorResponse);
          this.isDisabled = false;
          this.buttonContent = 'Login';
          this.showError = false;
        }
      });
  }

}
