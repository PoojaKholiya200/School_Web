import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
// import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
      path:'',
      component:HomeComponent,
      pathMatch:'full',
    },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
   {
     path:'admin',
     component:AdminComponent,
    pathMatch:'full',
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
