# SETUP.md

# Project Setup Instructions

This document provides step-by-step instructions to set up the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Angular CLI](https://angular.io/cli) (install globally using `npm install -g @angular/cli`)

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/GestionConocimiento.git
cd GestionConocimiento
```

## Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

## Running the Application

Once the dependencies are installed, you can run the application using the following command:

```bash
ng serve
```

This will start the development server. Open your browser and navigate to `http://localhost:4200` to view the application.

## Building the Application

To build the application for production, use the following command:

```bash
ng build --prod
```

The output will be stored in the `dist/` directory.

## Running Tests

To run the unit tests for the application, use the following command:

```bash
ng test
```

This will execute the tests defined in the project.

## Additional Information

For more details on how to use the application, refer to the [USAGE.md](USAGE.md) document. If you encounter any issues, please check the [CONTRIBUTING.md](../.github/CONTRIBUTING.md) file for guidelines on how to report them.