import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiListComponent } from './components/contatti-list/contatti-list.component';
import { ContattoUpsertComponent } from './components/contatto-upsert/contatto-upsert.component';

const routes: Routes = [
  {
    path: "", component: ContattiListComponent
  },
  {
    path: ":id", component: ContattoUpsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
