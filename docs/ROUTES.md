# ROUTES.md

## Application Routing Structure

This document outlines the routing structure of the Angular application, detailing the available routes and their corresponding components.

### Routes Overview

The application defines the following routes:

1. **Home Route**
   - **Path:** `/`
   - **Component:** `DataTableComponent`
   - **Description:** This is the default route that displays a table of cryptocurrency data. Users can search and filter the displayed cryptocurrencies.

2. **Detail Route**
   - **Path:** `/detalle/:symbol`
   - **Component:** `DetalleMonedaComponent`
   - **Description:** This route displays detailed information about a selected cryptocurrency. The `:symbol` parameter is used to identify which cryptocurrency's details to display.

### Route Configuration

The routes are defined in the `src/app/app.routes.ts` file as follows:

```typescript
import { Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DetalleMonedaComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: DataTableComponent
  },
  {
    path: 'detalle/:symbol', 
    component: DetalleMonedaComponent
  },
];
```

### Navigation

- Users can navigate to the home route by accessing the root URL of the application.
- To view the details of a specific cryptocurrency, users can click on a cryptocurrency entry in the data table, which will redirect them to the detail route with the corresponding symbol.

### Conclusion

This routing structure allows for a seamless user experience, enabling easy navigation between the list of cryptocurrencies and their detailed views.