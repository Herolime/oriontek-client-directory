import { Injectable } from '@angular/core';
import { Client } from './client';
import { Address } from './address';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  readonly url = 'http://localhost:3000/clients';

  constructor() {}

  async getAllClients(): Promise<Client[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getClientById(id: string): Promise<Client> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async filterClientByName(name: string): Promise<Client[]> {
    const clients = await this.getAllClients();
    return clients.filter((c) => c.name.includes(name));
  }

  async addClient(clientName: string) {
    const createClient = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: clientName,
        addresses: [],
        lastUpdatedAt: new Date().toISOString(),
      }),
    });

    if (!createClient.ok) {
      console.error(
        'something went wrong',
        createClient.status,
        await createClient.json()
      );
    }
  }

  async editClient(
    client: Client,
    clientName: string
  ): Promise<Client | undefined> {
    const modifiedClient: Client = {
      ...client,
      name: clientName,
      lastUpdatedAt: new Date().toISOString(),
    };
    const updateClient = await fetch(`${this.url}/${client.id}`, {
      method: 'PUT',
      body: JSON.stringify(modifiedClient),
    });

    if (updateClient.ok) {
      return await updateClient.json();
    } else {
      console.error(
        'something went wrong',
        updateClient.status,
        await updateClient.json()
      );
      return undefined;
    }
  }

  async addAddress(
    client: Client,
    address: Address
  ): Promise<Client | undefined> {
    const modifiedClient: Client = {
      ...client,
      addresses: [...client.addresses, address],
      lastUpdatedAt: new Date().toISOString(),
    };
    const updateClient = await fetch(`${this.url}/${client.id}`, {
      method: 'PUT',
      body: JSON.stringify(modifiedClient),
    });

    if (updateClient.ok) {
      return await updateClient.json();
    } else {
      console.error(
        'something went wrong',
        updateClient.status,
        await updateClient.json()
      );
      return undefined;
    }
  }
}
