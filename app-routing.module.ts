import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReferenceComponent } from './reference/reference.component';
import { BookingComponent } from './booking/booking.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
