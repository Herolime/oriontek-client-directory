import { Component, inject, OnInit } from '@angular/core';
import { AddressesComponent } from '../addresses/addresses.component';
import { Client } from '../client';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { AddressFormComponent } from '../address-form/address-form.component';
import { Address } from '../address';

@Component({
  selector: 'app-clients',
  imports: [
    AddressesComponent,
    CommonModule,
    FormsModule,
    AddressFormComponent,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  clientService = inject(ClientService);
  location = inject(Location);
  client?: Client;
  clientName = '';

  ngOnInit(): void {
    const clientId = this.route.snapshot.params['id'];
    this.clientService.getClientById(clientId).then((cl) => {
      this.client = cl;
      this.clientName = this.client?.name ?? this.clientName;
    });
  }
  goBack() {
    this.location.back();
  }
  async AddAddress(address: Address) {
    console.log(address);
    const updatedClient = await this.clientService.addAddress(
      this.client as Client,
      address
    );
    if (updatedClient) {
      this.client = updatedClient;
    }
  }
  async updateClient() {
    console.log('on event');
    const updatedClient = await this.clientService.editClient(
      this.client as Client,
      this.clientName
    );
    if (updatedClient) {
      this.client = updatedClient;
      this.clientName = updatedClient.name;
    }
  }
}
