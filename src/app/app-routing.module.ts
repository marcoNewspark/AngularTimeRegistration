import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeekDetailComponent } from './week-detail/week-detail.component';


const routes: Routes = [
  { path:'', component: AppComponent},
  { path:'weekDetail', component: WeekDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
