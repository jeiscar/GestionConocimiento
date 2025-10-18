import { Component, OnInit } from '@angular/core';
import { DataService, CryptoData } from '../../services/data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-moneda',
  standalone: true,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
  imports: [CommonModule]
})
export class DetalleMonedaComponent implements OnInit {
  crypto$!: Observable<CryptoData | null>;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.crypto$ = this.dataService.getSelectedCrypto();
  }

  buttonVolver(): void {
    this.router.navigate(['/']);
  }
}
