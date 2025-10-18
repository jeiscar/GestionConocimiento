import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WikiHeaderComponent } from '../../components/header/wiki-header.component';

@Component({
  selector: 'app-crypto-wiki',
  standalone: true,
  imports: [CommonModule, RouterModule, WikiHeaderComponent],
  template: `
    <div class="wiki-container">
      <app-wiki-header></app-wiki-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .wiki-container {
        min-height: 100vh;
        background-color: #f5f5f5;
      }
    `,
  ],
})
export class CryptoWikiComponent {}
