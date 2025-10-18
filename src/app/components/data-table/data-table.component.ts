import { Component, OnInit, signal, computed } from '@angular/core';
import { DataService, CryptoData } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  imports: [CommonModule]
})
export class DataTableComponent implements OnInit {

  readonly cryptoData = signal<CryptoData[]>([]);
  isLoading = true;
  readonly searchTerm = signal('');

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.dataService.getdata().subscribe({
      next: (data) => {
        this.cryptoData.set(data);
        this.isLoading = false;
      }
    })
  }

  cambiarcolor(variacion: number): string {
    return variacion < 0 ? 'red' : 'green';
  }

  readonly filteredData = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const list = this.cryptoData();
    if (!term) return list;
    return list.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.symbol.toLowerCase().includes(term)
    );
  })

  verDetalle(symbol: string): void {
    const data = this.cryptoData().find(c => c.symbol === symbol);
    if (data) {
      this.dataService.setSelectedCrypto(data);
      this.router.navigate(['/detalle', symbol]);
    }
  }
}
