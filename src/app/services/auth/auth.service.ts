import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {}

  login(): void {
    this.keycloakService.login();
  }

  logout(): void {
    this.keycloakService.logout();
  }

  getUserProfile(): Promise<Keycloak.KeycloakProfile | null> {
    return this.keycloakService.loadUserProfile();
  }

  hasRole(role: string): boolean {
    return this.keycloakService.isUserInRole(role);
  }

  // Connexion avec un Identity Provider (Facebook, Google)
  loginWithIdentityProvider(providerId: string): void {
    const options = { idpHint: providerId }; // Ex : 'google' ou 'facebook'
    this.keycloakService.login(options);
  }

}
