import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from 'src/app/componentes/workspace/workspace.component';
import { CreateBookComponent } from './componentes/create-book/create-book.component';
import { ListBooksComponent } from './componentes/list-books/list-books.component';

const routes: Routes = [
  { path: '', redirectTo: 'workspace/createBook', pathMatch: 'full' },
  {
    path: 'workspace',
    component: WorkspaceComponent,
    children: [
      { path: 'createBook', component: CreateBookComponent },
      { path: 'listBooks', component: ListBooksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
