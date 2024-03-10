import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AccountGuardFn } from './guards/account.guard';
import { SignGuardFn } from './guards/sign.guard';
import { VerifyComponent } from './components/verify/verify.component';
import { ActiveComponent } from './components/active/active.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent, canActivate: [SignGuardFn]},
  {path: 'register', component: SignUpComponent, canActivate: [SignGuardFn]},
  {path: '', component : HomeComponent, canActivate: [AccountGuardFn]},
  {path: 'verify', component: VerifyComponent, canActivate: [SignGuardFn]},
  {path: 'active', component: ActiveComponent, canActivate: [SignGuardFn]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
