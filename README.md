# WorldWise

<p align="center">
  <img src="https://github.com/JoseAlbDR/worldwide/blob/main/public/logo.png" alt="WorldWise Logo">
</p>

WorldWise is a web application developed with React that allows you to track the cities you have visited around the world. You can mark cities on an interactive map, add notes and visit dates, and explore visited cities by country.

## Demo

You can see a live demo of the application at [WorldWise Demo]([https://worldwise-demo.com](https://worldwise.jadelgadorobles.com/)).

## Screenshots

Below are some screenshots of the application:

<p align="center">
  <img src="screenshots/screenshot1.png" alt="Screenshot 1" width="400">
  <img src="screenshots/screenshot2.png" alt="Screenshot 2" width="400">
  <img src="screenshots/screenshot3.png" alt="Screenshot 3" width="400">
</p>

## Features

✅ User registration and authentication.  
✅ Secure navigation through protected routes.  
✅ Homepage with an overview of the application and a link to log in.  
✅ Pricing page showing available plans.  
✅ Product page describing the application features.  
✅ Login page where users can log in with their account.  
✅ Interactive map displaying visited cities and allowing the addition of new cities by clicking on the map.  
✅ Search bar to search for specific cities on the map.  
✅ List of visited cities with an option to delete cities.  
✅ List of visited countries based on registered cities.  
✅ Form to add new cities with name, date, notes, and automatic location based on the user's position on the map.

## Project Structure

The project is structured as follows:

- `public/`: Contains the static files of the application.
- `src/`: Contains the source code of the application.
  - `components/`: Contains reusable components used in various parts of the application.
  - `context/`: Contains the contexts used to share data between components.
  - `pages/`: Contains the main pages of the application.
  - `hooks/`: Contains custom hooks used in the application.
  - `utils/`: Contains additional utilities used in the application.
- `screenshots/`: Contains screenshots of the application.

## Dependencies

The project uses the following npm dependencies:

- `@brianmmdev/faunaservice`: Library for interacting with the FaunaDB database through Netlify Functions.
- `dotenv`: Library for loading environment variables from a `.env` file.
- `json-server`: JSON server for simulating a REST API for local development.
- `leaflet` and `react-leaflet`: Libraries used to display the interactive map in the application.
- `lodash`: JavaScript utility library used for manipulating and sorting data.
- `netlify-cli`: Command-line tool for interacting with Netlify.
- `react` and `react-dom`: Core React libraries for building user interfaces.
- `react-datepicker`: Date picker component used in the application's form.
- `react-router-dom`: Library for application routing using React's component-based approach.


