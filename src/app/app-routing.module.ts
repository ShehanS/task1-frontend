import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimmerComponent } from './timmer/timmer.component';


const routes: Routes = [
  {path:'', component: TimmerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
