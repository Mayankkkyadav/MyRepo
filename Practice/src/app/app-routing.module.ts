import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.Component' ;
import { ListComponent } from './list/list.Component' ;
import { SearchComponent } from './search/search.Component' ;


const routes: Routes = [
  { path:'add',component:AddComponent},
  { path:'list',component:ListComponent},
  { path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
