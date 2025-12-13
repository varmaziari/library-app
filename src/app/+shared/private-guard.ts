import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('token')){
    return true;  
  }
  if (localStorage.getItem('token')) {
    sessionStorage.setItem('token', localStorage.getItem('token')??'');
    return true;
  }
  const router = inject(Router);
router.navigateByUrl('/login');
  return false;
};
