import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const rolePermissionGuard: CanActivateFn = (route, state ) => {
  console.log("---------------------------------")
  let keycloakService = Inject(KeycloakService);
  let router = Inject(Router);
  const requiredRoles = route.data['roles'] as string[];
  console.log("verification e la route en cours", requiredRoles);
    if (requiredRoles && requiredRoles.length > 0) {
      const hasAccess = requiredRoles.some((role) =>
        keycloakService.isUserInRole(role)
      );

      if (!hasAccess) {
        router.navigate(['/access-denied']);
        return false;
      }
    }
    return false;
};



/* @Injectable()
export class rolePermissionGuard implements CanActivate {
  
  constructor(private keycloakService: KeycloakService, private router: Router) {
    console.log("---------------------------------")
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const requiredRoles = route.data['roles'] as string[];
    console.log("---------------------------------")

    if (requiredRoles && requiredRoles.length > 0) {
      const hasAccess = requiredRoles.some((role) =>
        this.keycloakService.isUserInRole(role)
      );

      if (!hasAccess) {
        this.router.navigate(['/access-denied']);
        return false;
      }
    }
    return true;
  }
} */
