import { Address } from './address';

export interface Client {
  id: number;
  name: string;
  addresses: Address[];
  lastUpdatedAt: string;
}
