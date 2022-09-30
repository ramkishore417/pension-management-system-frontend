import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { PensionerListComponent } from '../components/pensioner-list/pensioner-list.component';
import { AuthGuard } from '../guard/auth.guard';
import { PensionComponent } from '../components/pension/pension.component';
import { TransactionListComponent } from '../components/transaction-list/transaction-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'pensionCalculation',component:PensionComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'pensionerList',component:PensionerListComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'transactionList',component:TransactionListComponent,pathMatch:'full',canActivate:[AuthGuard]},
  {path:'**',component:HomeComponent}
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
