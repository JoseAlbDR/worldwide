# worldwide
SPA to save your visited countries done with React
# WorldWise

<p align="center">
  <img src="https://github.com/JoseAlbDR/worldwide/blob/main/public/logo.png" alt="WorldWise Logo">
</p>

WorldWise is a web application developed with React that allows you to track the cities you have visited around the world. You can mark cities on an interactive map, add notes and visit dates, and explore visited cities by country.

## Demo

You can see a live demo of the application at [WorldWise Demo](https://worldwise-demo.com](https://worldwise.jadelgadorobles.com/)).

## Screenshots

Below are some screenshots of the application:

<p align="center">
  <img src="https://github.com/JoseAlbDR/worldwide/blob/netlify/public/WorldWise.PNG" alt="Worldwise" width="400" height="200">
  <img src="https://github.com/JoseAlbDR/worldwide/blob/netlify/public/WorldWise2.PNG" alt="Worldwise" width="400" height="200">
  <img src="https://github.com/JoseAlbDR/worldwide/blob/netlify/public/WorldWise3.PNG" alt="Worldwise" width="400" height="200">
</p>

## Demo Video

https://github.com/JoseAlbDR/worldwise/assets/128265706/4f89907d-d0c5-4434-8349-796a3de73984

## Features

✅ Secure navigation through protected routes.  
✅ Homepage with an overview of the application and a link to log in.  
✅ Pricing page showing available plans.  
✅ Product page describing the application features.  
✅ Login page where users can log in with their account.  
✅ Interactive map displaying visited cities and allowing the addition of new cities by clicking on the map.  
✅ Search bar to search for specific cities on the map.  
✅ List of visited cities with an option to delete cities.  
✅ List of unique visited countries based on registered cities.  
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

## Serverless API Functions

The application makes use of Serverless API functions to handle certain functionalities. These functions are responsible for interacting with the database and retrieving data from external APIs. Here is an overview of the available functions:

- **Create City:** Creates a new city record in the database.
- **Delete City:** Deletes a city record from the database.
- **Get City by ID:** Retrieves a city record from the database based on its ID.
- **List Cities:** Retrieves a list of all cities from the database.
- **Get City Coordinates:** Retrieves the coordinates (latitude and longitude) of a city using the OpenWeatherMap API.

These functions are implemented using Netlify Functions and are triggered by specific API endpoints. They provide the necessary backend functionality for the application to manage city data and retrieve additional information.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/worldwise.git

2. Navigate to the project directory:

   ```bash
   cd worldwise

3. Install the dependencies:

    ```bash
    npm install

### Local Development

#### In branch main

1. Start the JSON server for simulating the REST API:

    ```bash
    npm run server

2. In a separate terminal, start the development server:

    ```bash
    npm run dev

3. Open your browser and visit http://localhost:3000 to see the application running.


### Deployment

#### In branch netlify

The application can be deployed using Netlify. Make sure to set up the required environment variables in the Netlify project settings and in .env file.

    FAUNA_API_KEY=<FAUNADB_API_KEY>
    OW_API_KEY=<OPENWEATHER_API_KEY>

1. Build the project:

    ```bash
    npm run build

2. Deploy the generated dist/ directory using Netlify CLI or by linking your repository to a Netlify project.

    ```bash
    netlify deploy --prod

## Contribution

If you want to contribute to this project here's how you can get involved:

1. Fork this repository.
2. Create a new branch for your contribution: `git checkout -b your-branch-name`.
3. Make your changes and improvements in the branch.
4. Make sure your changes do not break any existing functionality.
5. Add and commit your changes: `git commit -am 'Description of the changes'`.
6. Push your branch to the remote repository: `git push origin your-branch-name`.
7. Open a pull request explaining your changes and why they should be accepted.
8. We'll be happy to review your request and merge your changes if they meet the project requirements.


## Issue Reporting

If you encounter any issues or have suggestions for improvements, please open an issue in the [issue tracker](https://github.com/JoseAlbDR/worldwide/issues) of the repository.

We greatly appreciate your contribution and look forward to working with you to improve this project.

## Credits

Original project from [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course) by [Jonas Schmedtmann](https://codingheroes.io/)

Repo of the original project: [Worldwise Original Repo](https://github.com/jonasschmedtmann/ultimate-react-course/tree/main/11-worldwise/final)

I adapted and updated this project only for learning pourposes.

