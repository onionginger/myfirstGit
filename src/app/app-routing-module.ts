import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' //angular router
import { Login } from './components/login/login';

const routes: Routes = [
  {path: 'login', 
  component: Login}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
