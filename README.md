# Weather Forecast

**Weather Forecast** is a modern web application built with **Vue 3** and **Vite**, allowing users to search for any city and view real-time weather information.

🌐 Live Demo: [https://qqax.github.io/weather-forecast/](https://qqax.github.io/weather-forecast/)

---

## Features

- **City Search** — instantly fetch weather data by entering any city name.
- **Current Weather** — displays:
    - Temperature (°C)
    - Surface Pressure
    - Humidity (%)
    - Timestamp of latest data update
- **12-Hour Temperature Chart** — shows temperature trends for the next 12 hours with a **color gradient** based on values.
- **Real-Time API Integration** — fetches weather data dynamically from an external source.
- **Responsive UI** — optimized for desktop and mobile devices.

---

## Technologies

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- HTML + CSS + TypeScript
- Weather API (e.g. [Open-Meteo](https://open-meteo.com/) or similar)
- GitHub Pages for hosting

---

## Getting Started


1. Clone the repository:
    ```bash
    git clone https://github.com/qqax/weather-forecast.git
    cd weather-forecast
    ```
2. Install dependencies (if applicable):
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open in your browser:
    ```
    http://localhost:3000
    ```

---

## Build & Deploy

**1. Build the project:**
```bash
npm run build
# or
yarn build
```
Build output will be placed in the ```dist/``` folder.

## Project Structure
```bash
├── cypress
│   ├── e2e
│   │   └── example.cy.ts
│   ├── fixtures
│   │   └── example.json
│   ├── support
│   │   ├── commands.ts
│   │   ├── component-index.html
│   │   ├── component.ts
│   │   └── e2e.ts
│   └── tsconfig.json
├── cypress.config.ts
├── env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── public
│   ├── apple-touch-icon.png
│   ├── favicon-96x96.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── base.css
│   │   ├── logo.svg
│   │   ├── main.css
│   │   └── tsTypes.ts
│   ├── components
│   │   ├── Current.vue
│   │   ├── Forecast.vue
│   │   ├── Header.vue
│   │   ├── icons
│   │   │   └── sun.svg
│   │   ├── Main.vue
│   │   ├── SearchPlace.vue
│   │   ├── __tests__
│   │   │   └── HelloWorld.cy.ts
│   │   └── Weather.vue
│   ├── main.ts
│   ├── requests
│   │   ├── fetchForecast.ts
│   │   └── fetchGeodata.ts
│   └── utils
│       └── temperature.ts
├── tsconfig.app.json
├── tsconfig.cypress-ct.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vue.config
```
