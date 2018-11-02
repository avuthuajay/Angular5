import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowpolicydetailsComponent } from './showpolicydetails/showpolicydetails.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './header/show-quote/show-quote.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ContentComponent },
  { path: 'history', component: ShowpolicydetailsComponent },
  { path: 'advisors', component: ShowAdvisorsComponent },
  { path: 'quote', component: ShowQuoteComponent },
  { path: 'branches', component: SearchBranchComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
