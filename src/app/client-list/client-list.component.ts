import { Component, inject, Input } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule, RouterModule, AddClientDialogComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
})
export class ClientListComponent {
  @Input() clients: Client[] = [];
  clientService: ClientService = inject(ClientService);
  async addClient(name: string) {
    await this.clientService.addClient(name);
    this.clients = await this.clientService.getAllClients();
  }
}
