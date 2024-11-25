import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: Keycloak.KeycloakProfile | null = null;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.user = await this.authService.getUserProfile();
    console.log("utilisateurs connecte", this.user);
  }

  logout(): void {
    this.authService.logout();
  }

}
