import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-client-dialog',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-client-dialog.component.html',
  styleUrl: './add-client-dialog.component.css',
})
export class AddClientDialogComponent {
  clientName = '';
  open = false;
  @Output('clientName') clientNameEvent = new EventEmitter<string>();

  onSubmit() {
    console.log('I have been clicked!');
    console.log(this.clientName);
    if (this.clientName) {
      this.clientNameEvent.emit(this.clientName);
      this.onCloseModal();
    }
  }
  onCloseModal() {
    this.open = false;
  }
  onOpenModal() {
    this.open = true;
  }
}
