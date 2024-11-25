import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Client } from '../client';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() clients: Client[] = [];
}
