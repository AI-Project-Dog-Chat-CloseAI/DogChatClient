import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class SignGauard {
  constructor(
    private accService: AccountService,
    private router: Router
  ) { }

  canActive(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.accService.checkUser()) return true;
    this.router.navigate(['']);
    return false;
  }
}

export const SignGuardFn: CanActivateFn = (route, state) => {
  return inject(SignGauard).canActive(route, state);
};
