import { Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DetalleMonedaComponent } from './components/detalle/detalle.component';

import { CryptoWikiComponent } from './layout/main/cryptoWiki.component';
import { MethodologyComponent } from './components/methology/methodology.component';

export const routes: Routes = [
  {
    path: '',
    component: CryptoWikiComponent,
    children: [
      {
        path: '',
        component: DataTableComponent,
      },
      {
        path: 'methodology',
        component: MethodologyComponent,
      },
      {
        path: 'detalle/:symbol',
        component: DetalleMonedaComponent,
      },
    ],
  },
];
