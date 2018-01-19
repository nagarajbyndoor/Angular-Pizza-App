import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FullMenuComponent } from './full-menu/full-menu.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'login/:id',component: LoginComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'contact',component: ContactComponent},
  { path: 'about',component: AboutComponent},
  { path: 'full-menu',component: FullMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
