# GestionConocimiento Project Wiki

## Overview
The GestionConocimiento project is an Angular application designed to display cryptocurrency data. It fetches data from the CoinGecko API and presents it in a user-friendly interface, allowing users to search for cryptocurrencies and view detailed information about each one.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Services](#services)
- [Routing](#routing)
- [Styling](#styling)
- [Testing](#testing)
- [Contributing](#contributing)

## Getting Started
To get started with the GestionConocimiento project, follow the setup instructions in the [SETUP.md](SETUP.md) file. This will guide you through installing dependencies and running the application.

## Project Structure
The project is organized into the following main directories:
- `src`: Contains the source code for the application.
- `docs`: Contains documentation files.
- `.github`: Contains contribution guidelines.
- Configuration files such as `angular.json`, `package.json`, and `tsconfig.json`.

## Components
### AppComponent
- **File**: `src/app/app.component.ts`
- **Description**: The root component of the application. It includes a title and uses the RouterModule for routing.
- **Template**: `src/app/app.component.html` contains a `<router-outlet>` for displaying routed components.

### DataTableComponent
- **File**: `src/app/components/data-table/data-table.component.ts`
- **Description**: Displays a table of cryptocurrency data. It handles data fetching, filtering, and navigation to detail views.
- **Template**: `src/app/components/data-table/data-table.component.html` includes an input for searching and a table for displaying data.

### DetalleMonedaComponent
- **File**: `src/app/components/detalle/detalle.component.ts`
- **Description**: Displays detailed information about a selected cryptocurrency.
- **Template**: `src/app/components/detalle/detalle.component.html` shows details such as price, market cap, and volume.

## Services
### DataService
- **File**: `src/app/services/data.service.ts`
- **Description**: Provides methods to fetch cryptocurrency data from the CoinGecko API and manage selected cryptocurrency data using observables.

## Routing
The application uses Angular's routing to navigate between components. The routing configuration is defined in `src/app/app.routes.ts`, mapping paths to components such as `DataTableComponent` and `DetalleMonedaComponent`.

## Styling
Each component has its own CSS file for styling:
- `src/app/app.component.css`
- `src/app/components/data-table/data-table.component.css`
- `src/app/components/detalle/detalle.component.css`

## Testing
Unit tests are provided for components and services to ensure functionality:
- `src/app/app.component.spec.ts` for `AppComponent`
- `src/app/services/data.service.spec.ts` for `DataService`

## Contributing
For guidelines on contributing to the project, please refer to the [CONTRIBUTING.md](.github/CONTRIBUTING.md) file. 

This wiki serves as a comprehensive guide to understanding and navigating the GestionConocimiento project. For more detailed instructions on usage and architecture, refer to the respective documentation files in the `docs` directory.