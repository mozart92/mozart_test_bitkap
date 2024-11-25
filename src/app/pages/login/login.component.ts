import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login();
  }

  loginWithGoogle(): void {
    this.authService.loginWithIdentityProvider('google');
  }

  loginWithFacebook(): void {
    this.authService.loginWithIdentityProvider('facebook');
  }

}
