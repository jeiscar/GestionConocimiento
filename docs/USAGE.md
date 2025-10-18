# Usage Instructions for GestionConocimiento

## Overview
The GestionConocimiento application is a cryptocurrency tracking tool that allows users to view and search for various cryptocurrencies, along with their current prices and market data. This document provides instructions on how to navigate and interact with the application.

## Getting Started
1. **Launch the Application**: After setting up the project as described in the `SETUP.md` file, run the application using the command:
   ```
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200` to access the application.

2. **Home Page**: Upon launching, you will be directed to the home page, which displays a table of cryptocurrencies. Each row in the table represents a different cryptocurrency and includes the following columns:
   - Icon
   - Name
   - Symbol
   - Current Price
   - Price Change (24h)

## Searching for Cryptocurrencies
- Use the search input at the top of the home page to filter the list of cryptocurrencies. As you type, the table will dynamically update to show only those cryptocurrencies that match your search term.

## Viewing Cryptocurrency Details
- Click on any row in the cryptocurrency table to view detailed information about that cryptocurrency. This will navigate you to the detail page for the selected cryptocurrency.

## Detail Page
- The detail page displays comprehensive information about the selected cryptocurrency, including:
  - Name and Symbol
  - Current Price
  - Market Capitalization
  - Total Volume
  - Price Change Percentage (24h)
- You can return to the home page by clicking the "pag. Ant" button.

## Additional Features
- The application is designed to be responsive and user-friendly, allowing for easy navigation and interaction with the data.
- The data is fetched from the CoinGecko API, ensuring that users have access to up-to-date cryptocurrency information.

## Conclusion
The GestionConocimiento application provides a simple yet effective way to track and manage cryptocurrency data. For further details on the application's architecture and routing, refer to the `ARCHITECTURE.md` and `ROUTES.md` files, respectively.