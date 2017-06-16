import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
