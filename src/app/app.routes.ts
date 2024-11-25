import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from './services/auth/auth.service';
import { AccessDeniedComponent } from './pages/errorPages/access-denied/access-denied.component';
import { NotfoundPageComponent } from './pages/errorPages/notfound-page/notfound-page.component';


export function rolePermissionGuard (route: ActivatedRouteSnapshot, state?: RouterStateSnapshot) {
    const requiredRoles = route.data['roles'] as string[];
    console.log("---------------------------------", requiredRoles)
    let keycloakService = inject(KeycloakService);
    let router = inject(Router);
    const authservice = inject(AuthService);
    console.log("verification e la route en cours", keycloakService.getUserRoles());
    if (requiredRoles && requiredRoles.length > 0) {
        const hasAccess = requiredRoles.some((role) =>
          keycloakService.getUserRoles().includes(role)
        );
        if (!hasAccess) {
            router.navigate(['/access-denied']);
            return false;
        }
    }
    return true;
  }
  

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: "",
    loadComponent: () =>
    import('./pages/loyout-content/loyout-content.component').then(
      (comp) => comp.LoyoutContentComponent
    ),
    children: [
        {
            path: 'profile',
            loadComponent: () =>
              import('./pages/profile/profile.component').then(
                (comp) => comp.ProfileComponent
              ),
            canActivate: [rolePermissionGuard],
            data: { roles: ['view-profile'] }
        },
        {
            path: 'home',
            loadComponent: () =>
              import('./pages/home/home.component').then(
                (comp) => comp.HomeComponent
              )
        },
        {
            path: 'mon-espace',
            loadComponent: () =>
              import('./pages/mon-espace/mon-espace.component').then(
                (comp) => comp.MonEspaceComponent
              ),
            canActivate: [rolePermissionGuard],
            data: { roles: ['mon-espace'] }
        }
    ]
  },
  {
    path: "access-denied",
    component: AccessDeniedComponent
  },
  {
    path: "notfound-page",
    component: NotfoundPageComponent
  },
  { path: '**', redirectTo: '/notfound-page' },
];
