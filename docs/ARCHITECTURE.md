# Architecture of the ApiTableProject

## Overview

The ApiTableProject is an Angular application designed to display cryptocurrency data fetched from an external API. The application is structured to provide a clean separation of concerns, making it easy to maintain and extend.

## Project Structure

The project is organized into several key directories and files, each serving a specific purpose:

- **src/**: This is the main source directory containing all the application code.
  - **main.ts**: The entry point of the Angular application. It bootstraps the main application component using the app configuration.
  - **index.html**: The main HTML file that serves as the host for the Angular application. It includes the `<app-root>` element where the Angular app will be rendered.
  - **app/**: Contains the core application components and services.
    - **app.component.ts**: Defines the root component of the application.
    - **app.component.html**: Contains the template for the root component, including a router outlet for displaying routed components.
    - **app.component.css**: Styles for the root component.
    - **app.config.ts**: Exports the app configuration, including providers for HTTP client and routing.
    - **app.routes.ts**: Defines the application routes, mapping paths to components.
    - **services/**: Contains services for data management.
      - **data.service.ts**: Provides methods to fetch cryptocurrency data and manage selected cryptocurrency data.
    - **components/**: Contains reusable components.
      - **data-table/**: Displays a table of cryptocurrency data.
        - **data-table.component.ts**: Logic for the data table component.
        - **data-table.component.html**: Template for the data table component.
        - **data-table.component.css**: Styles for the data table component.
      - **detalle/**: Displays detailed information about a selected cryptocurrency.
        - **detalle.component.ts**: Logic for the detail component.
        - **detalle.component.html**: Template for the detail component.
        - **detalle.component.css**: Styles for the detail component.

- **docs/**: Contains documentation files for the project.
  - **README_WIKI.md**: Main documentation providing an overview and instructions.
  - **SETUP.md**: Setup instructions for the project.
  - **USAGE.md**: Usage instructions for the application.
  - **ARCHITECTURE.md**: This file, describing the architecture of the application.
  - **ROUTES.md**: Outlines the routing structure of the application.

- **.github/**: Contains guidelines for contributing to the project.
  - **CONTRIBUTING.md**: Provides contribution guidelines.

- **Configuration Files**:
  - **angular.json**: Configuration for the Angular project.
  - **package.json**: Lists project dependencies and scripts.
  - **tsconfig.json**: TypeScript configuration specifying compiler options.

## Design Decisions

1. **Modular Structure**: The application is designed with a modular structure, allowing for easy maintenance and scalability. Each component and service is encapsulated within its own directory.

2. **Reactive Programming**: The application utilizes RxJS for handling asynchronous data streams, particularly in the `DataService`, which fetches data from an external API and manages state using observables.

3. **Routing**: Angular's routing module is used to navigate between different views of the application. The routes are defined in `app.routes.ts`, mapping paths to their respective components.

4. **Styling**: Each component has its own CSS file, promoting encapsulation of styles and preventing style leakage between components.

5. **Testing**: Unit tests are provided for critical components and services, ensuring the reliability of the application. Each component and service has a corresponding `.spec.ts` file for testing.

## Conclusion

The ApiTableProject is structured to provide a clear and maintainable codebase, leveraging Angular's features to create a responsive and user-friendly application for displaying cryptocurrency data. The architecture supports future enhancements and scalability, making it a robust solution for cryptocurrency data visualization.