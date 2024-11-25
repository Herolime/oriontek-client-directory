import { Component, inject } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, ClientListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  clientService: ClientService = inject(ClientService);
  clientList: Client[] = [];
  dashboardClientList: Client[] = [];
  showDashboard = true;
  showList = false;
  constructor() {
    this.clientService.getAllClients().then((clients: Client[]) => {
      this.clientList = clients;
      this.dashboardClientList = clients
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedAt).getTime() -
            new Date(a.lastUpdatedAt).getTime()
        )
        .slice(0, 3);
    });
  }

  setShowDashboard() {
    this.showDashboard = true;
    this.showList = false;
  }
  setShowList() {
    this.showDashboard = false;
    this.showList = true;
  }
}
