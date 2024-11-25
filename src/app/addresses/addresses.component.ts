import { Component, Input } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-addresses',
  imports: [],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
})
export class AddressesComponent {
  @Input() address!: Address;
}
