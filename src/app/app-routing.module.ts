import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MenuComponent } from './menu/menu.component';
import { InsertFormComponent } from './insert-form/insert-form.component';

import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { 
    path: 'signup', 
    component: LogInComponent 
  },
  { 
    path: 'login', 
    component: LogInComponent
  },
  { 
    path: 'menu/:page', 
    component: MenuComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'menu/', 
    redirectTo: 'menu/1', 
    pathMatch: "full"
  },
  { 
    path: 'menu', 
    redirectTo: 'menu/1', 
    pathMatch: "full"
  },
  { 
    path: 'insert-form', 
    component: InsertFormComponent, 
    canActivate: [AuthGuard]
  },
  { 
    path: 'edit-form/:editId', 
    component: EditFormComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
