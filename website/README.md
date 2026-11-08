# CS 465 Module Two: Travlr Getaways

This project refactors the original seven-page Travlr Getaways HTML website into an Express application using the Model-View-Controller (MVC) pattern and Handlebars (HBS). The original CSS, logos, backgrounds, and photographs are preserved in `public/`.

## Run locally

You need Node.js and npm installed. In VS Code, open the `travlr` folder, then use its terminal:

```powershell
npm install
npm start
```

Open **http://localhost:3000/** for the main page and **http://localhost:3000/travel** for the routed HBS travel page. Test all seven menu links, the three reef images, and the logo. Stop the server with Ctrl+C.

To run the automated route and rendering checks:

```powershell
npm test
```

## Folders

- `app.js`: Registers HBS, the partials directory, MVC routes, and static public assets.
- `app_server/routes/`: Maps browser URLs to controllers.
- `app_server/controllers/`: Chooses the page and supplies its data to the view.
- `app_server/models/trips.js`: Reads the initial trip data.
- `app_server/views/`: HBS content pages.
- `app_server/views/layouts/layout.hbs`: Shared document wrapper and stylesheet link.
- `app_server/views/partials/`: Shared header, footer, and repeated trip markup.
- `data/trips.json`: The original three reef entries as structured data for rendering.
- `public/css/` and `public/images/`: The original supplied website assets, not replacements.

All seven pages are rendered by controllers. On the travel page, the controller passes the three original reef entries to Handlebars. The `{{#each trips}}` directive renders a trip partial for each entry. The header and footer partials avoid repeating the same navigation markup across pages.

The contact form is only a demonstration. Submitting it shows a notice that email is not connected. Booking, database storage, administration, and login will be developed in later modules.

## Module Two Git branch

This ZIP contains the **project files**, not your existing `.git` history. To retain your Module One commits, open the local Git project from the prior assignment, create the new branch, and copy the files from this `travlr` folder into it (replacing the corresponding files):

```powershell
git status
git switch module1
git switch -c module2
```

If `module2` already exists, use `git switch module2` instead of the last command. After copying the files, run `npm install`, `npm test`, and `npm start`. When you have verified the website:

```powershell
git add .
git commit -m "Module 2 MVC and Handlebars refactor"
git push -u origin module2
```

Submit the **ZIP containing the completed `travlr` project** to Brightspace. Do not include `node_modules` in the ZIP. Do not submit this README by itself.

## About the supplied design

The HTML pages, stylesheet and graphics were supplied as an existing Travlr course website. Their markup and assets were retained in the refactor. Original template credit is preserved in the CSS comment. Incorrect old `.html` links were updated to their Express page routes; the older URLs redirect to the MVC pages.
