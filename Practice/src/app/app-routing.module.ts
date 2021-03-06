import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.Component' ;
import { ListComponent } from './list/list.Component' ;
import { SearchComponent } from './search/search.Component' ;
import { EditComponent } from './edit/edit.component';
 

const routes: Routes = [
   {path: '',redirectTo: 'add' , pathMatch: 'full'},
  { path:'add',component:AddComponent},
  { path:'list',component:ListComponent},
  { path:'search',component:SearchComponent},
  { path:'edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddComponent,ListComponent,SearchComponent,EditComponent];
