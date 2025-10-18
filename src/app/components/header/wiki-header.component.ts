// wiki-header.component.ts
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wiki-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="wiki-header">
      <h1>Crypto Wiki</h1>
      <nav class="tabs">
        <button
          class="tab-button"
          [class.active]="currentRoute() === '/methodology'"
          (click)="navigateTo('methodology')"
        >
          Metodología
        </button>
        <button
          class="tab-button"
          [class.active]="currentRoute() === '/'"
          (click)="navigateTo('')"
        >
          Monedas
        </button>
      </nav>
    </div>
  `,
  styles: [
    `
      .wiki-header {
        padding: 20px;
        border-bottom: 1px solid #ddd;
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .wiki-header h1 {
        margin: 0;
        color: #333;
      }

      .tabs {
        margin-top: 15px;
        gap: 20px;
      }

      .tab-button {
        padding: 10px 20px;
        margin-right: 10px;
        border: none;
        background: none;
        cursor: pointer;
        border-bottom: 3px solid transparent;
        font-size: 16px;
      }

      .tab-button:hover {
        background-color: #f0f0f0;
      }

      .tab-button.active {
        border-bottom-color: #007bff;
        font-weight: bold;
        color: #007bff;
      }
    `,
  ],
})
export class WikiHeaderComponent {
  currentRoute = signal('');

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute.set(this.router.url);
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
