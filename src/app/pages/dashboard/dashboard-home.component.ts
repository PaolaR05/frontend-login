import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <h2>Dashboard</h2>
    <div class="grid">
      <mat-card class="card large">
        <mat-card-title>Card 1</mat-card-title>
        <mat-card-content>Card Content Here</mat-card-content>
      </mat-card>
      <mat-card class="card">
        <mat-card-title>Card 2</mat-card-title>
        <mat-card-content>Card Content Here</mat-card-content>
      </mat-card>
      <mat-card class="card">
        <mat-card-title>Card 3</mat-card-title>
        <mat-card-content>Card Content Here</mat-card-content>
      </mat-card>
      <mat-card class="card">
        <mat-card-title>Card 4</mat-card-title>
        <mat-card-content>Card Content Here</mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    h2 {
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .card.large {
      grid-column: span 2;
    }
  `]
})
export class DashboardHomeComponent {}
