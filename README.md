# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installing dependencies
```
cd coms417
npm i
```

## Running and building
Start the server and build the frontend
```
npm run start:all
```
Test
```
npm run test
```

## Generate reports
You can use [stryker](https://stryker-mutator.io) to generate reports using mutation testing
```
npx stryker run
```