import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface CryptoData {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly selectedCrypto = new BehaviorSubject<CryptoData | null>(null);

  constructor(private readonly http: HttpClient) {}

  getdata(): Observable<CryptoData[]> {
    return this.http.get<CryptoData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1');
  }

  setSelectedCrypto(data: CryptoData): void {
    this.selectedCrypto.next(data);
  }

  getSelectedCrypto(): Observable<CryptoData | null> {
    return this.selectedCrypto.asObservable();
  }
}
