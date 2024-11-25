import { Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Main Directory',
  },
  {
    path: 'clients/:id',
    component: ClientsComponent,
    title: 'Client Details',
  },
];
