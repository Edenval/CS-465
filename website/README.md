# CS 465 Module Two: Travlr Getaways

This project refactors the original Travlr Getaways website into an Express application using the Model-View-Controller (MVC) architecture and Handlebars (HBS) templates. The original website design, CSS, and images are preserved, while routing and page rendering are handled through Express.

## Running the Application

Node.js and npm are required to run the application. Open the `website` folder in VS Code and run:

```powershell
npm install
npm start
```

Once the server starts, the website is available at http://localhost:3000/.

The Travel page can also be accessed directly at http://localhost:3000/travel.

To run the automated tests:

```powershell
npm test
```

## Project Structure

The application separates routing, controllers, data handling, and templates into different files and folders.

- `app.js` - Configures Express, Handlebars, routes, and static files.
- `app_server/routes/` - Defines routes and connects requests to controllers.
- `app_server/controllers/` - Handles requests and passes data to the views.
- `app_server/models/trips.js` - Loads the travel destination data.
- `app_server/views/` - Contains the Handlebars templates for the website.
- `app_server/views/layouts/layout.hbs` - Provides the shared HTML layout.
- `app_server/views/partials/` - Contains reusable header, footer, and trip templates.
- `data/trips.json` - Stores the information for the three reef destinations.
- `public/` - Contains the original CSS, images, and other static assets.

## MVC and Handlebars Implementation

The website uses Express routes to direct requests to the appropriate controllers. Each controller handles the request and renders the corresponding Handlebars view. This separates page logic from the HTML templates and keeps the application organized.

The Travel page uses data stored in `trips.json` rather than hardcoding each destination into the HTML. The travel controller retrieves the data through the model and passes it to the view. Handlebars uses the `{{#each trips}}` helper to render Gale Reef, Dawson's Reef, and Claire's Reef using a shared trip partial.

The header and footer are also stored as partials to avoid repeating the same markup across multiple pages. A shared layout provides the common HTML structure and stylesheet references.

## Website Functionality

All seven original pages are rendered through Express and Handlebars. Navigation links point to the updated routes, and requests using the original `.html` URLs redirect to their corresponding MVC routes.

The website retains its original images, styling, and general layout. The contact form displays a notification when submitted because email functionality has not been implemented. Booking, database storage, and authentication are not included in this version.

## Original Website Assets

The original Travlr Getaways HTML pages, CSS, and images were provided as course materials. These assets were retained during the MVC refactor, with the existing template attribution preserved in the stylesheet.
