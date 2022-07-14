import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form/form.component';
import { CardComponent } from './cards/card/card.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'new', component: FormComponent},
  {path: 'home', component: SearchComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
