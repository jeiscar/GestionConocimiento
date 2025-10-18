import { Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DetalleMonedaComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: DataTableComponent
  },
  {
    path: 'detalle/:symbol', component: DetalleMonedaComponent
  },
];
