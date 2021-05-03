import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HeaderComponent } from './header/header.component'

import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertFormComponent,
    EditFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
