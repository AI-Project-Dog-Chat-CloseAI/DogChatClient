import { AccountService } from './../services/account.service';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard {
  constructor(
    private accService: AccountService,
    private router: Router
  ) { }

  canActive(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.accService.checkUser()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}


export const AccountGuardFn: CanActivateFn = (route, state) => {
  return inject(AccountGuard).canActive(route, state);
};
