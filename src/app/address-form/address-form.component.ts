import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address } from '../address';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  open = false;
  addressForm = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl(''),
  });

  @Output() address = new EventEmitter<Address>();

  addAddress() {
    this.address.emit({
      street: this.addressForm.value.street ?? '',
      city: this.addressForm.value.city ?? '',
      state: this.addressForm.value.state ?? '',
      zipCode: this.addressForm.value.zipCode ?? '',
      country: this.addressForm.value.country ?? '',
    });
    this.onCloseModal();
  }

  onCloseModal() {
    this.open = false;
  }
  onOpenModal() {
    this.open = true;
  }
}
