# Currency Converter

A simple React application built with Vite and Tailwind CSS that allows users to convert currencies using real-time exchange rates from the ExchangeRate API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to set up the project locally:

1. **Create the Vite project with React:**
    ```bash
    npm create vite@latest currency-converter --template react
    ```

2. **Navigate into the project directory:**
    ```bash
    cd currency-converter
    ```

3. **Install dependencies:**
    Install the required npm packages:
    ```bash
    npm install
    ```

4. **Set up Tailwind CSS:**
    Follow these steps to set up Tailwind CSS for styling:
    - Install Tailwind and its dependencies:
      ```bash
      npm install -D tailwindcss postcss autoprefixer
      ```
    - Initialize Tailwind:
      ```bash
      npx tailwindcss init
      ```
    - Replace the contents of `tailwind.config.js` with:
      ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      ```
    - Add the following to your `src/index.css` file to import Tailwind's default styles:
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
    - Ensure that your `index.css` is imported into `src/main.jsx` or `src/index.jsx`:
      ```jsx
      import './index.css';
      ```

5. **Start the development server:**
    ```bash
    npm run dev
    ```

Now, your app should be running at [http://localhost:3000](http://localhost:3000).

## Usage

Once the server is running, you can use the Currency Converter to convert between different currencies. The app uses the **ExchangeRate API** to fetch real-time currency rates.

- Enter the amount you want to convert.
- Select the currencies (from and to).
- The converted amount will be displayed.

Example usage:
```jsx
// Fetch currency data using the API
const fetchExchangeRates = async (fromCurrency, toCurrency) => {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/952463395b742fdbb052271f/latest/${fromCurrency}`);
  const data = await response.json();
  return data.conversion_rates[toCurrency];
};