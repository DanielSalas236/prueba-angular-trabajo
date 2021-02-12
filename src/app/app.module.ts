import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { WorkspaceComponent } from './componentes/workspace/workspace.component';
import { CreateBookComponent } from './componentes/create-book/create-book.component';
import { ListBooksComponent } from './componentes/list-books/list-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    WorkspaceComponent,
    CreateBookComponent,
    ListBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
