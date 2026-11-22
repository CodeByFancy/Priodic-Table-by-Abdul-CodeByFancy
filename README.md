# Element Atlas — Interactive Periodic Table

A complete beginner-friendly periodic table web project made with HTML, CSS, and vanilla JavaScript. It is designed to open directly in Visual Studio Code and run in a browser without a build system.

## Features
- All 118 chemical elements with symbol, atomic number, name, and approximate atomic mass
- Periodic-table layout with detached lanthanide and actinide rows
- Live search by element name, symbol, or atomic number
- Category filter and reset button
- Element details modal with category, period, group, phase, discovery information, and a short fact
- Responsive layout, keyboard Escape-to-close, and accessible button labels
- No npm packages or framework required

## Project files
- `index.html` — page structure
- `style.css` — design, layout, responsiveness, and colors
- `script.js` — element data, table rendering, search, filtering, and modal interactions
- `README.md` — setup and learning guide
- `assets/preview.png` — project cover/preview graphic

## Run in Visual Studio Code
1. Extract the ZIP file to a folder.
2. Open Visual Studio Code.
3. Select **File → Open Folder…** and choose `periodic_table_web_project`.
4. Open `index.html`.
5. Recommended: install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**. You can also open `index.html` directly in a browser.
6. Edit `style.css` to customize appearance and `script.js` to customize data or behavior.

## How it works
1. The HTML provides a semantic page structure, controls, periodic-table container, and modal.
2. CSS Grid places element buttons in an 18-column periodic-table layout.
3. JavaScript stores element data as arrays and creates one button per element.
4. Search and category controls add a `dimmed` class to non-matching elements rather than removing them, so the table structure stays visible.
5. Clicking a tile fills and opens the details modal. Escape or the close button dismisses it.

## Customize it
- Change colors in `:root` and the category class rules in `style.css`.
- Add or adjust element facts in `elements` inside `script.js`.
- Add new filters by extending the category select in `index.html` and `categoryNames` in `script.js`.
- To publish it, upload the three main files to a static host such as GitHub Pages or Netlify.

## Important note
This is an educational starter project, not a certified scientific database. Atomic masses, discovery dates, and category conventions can vary by reference and isotope; verify data against a trusted chemistry source for academic or professional publication.
