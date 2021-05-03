import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MenuComponent } from './menu/menu.component';

import { InsertFormComponent } from './insert-form/insert-form.component'

const routes: Routes = [
  { path: 'menu/:page', component: MenuComponent },
  { path: 'menu/', redirectTo: 'menu/1', pathMatch: "full" },
  { path: 'menu', redirectTo: 'menu/1', pathMatch: "full" },
  { path: 'insert-form', component: InsertFormComponent },
  { path: 'edit-form/:editId', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
