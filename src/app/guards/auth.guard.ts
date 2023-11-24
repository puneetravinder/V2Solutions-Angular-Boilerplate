import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const token = authService.isAuthenticatedUser();
  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
}