# JS-Projects

The `README.md` file serves as the primary documentation and landing page for the **JS-projects** repository, defining its purpose as a collection of projects built using Vanilla JavaScript.

## Overview

The `README.md` file acts as a manifest for a repository dedicated to "Vanilla JavaScript" (vanila) development. It signals to developers that the codebase contains a series of independent mini-projects or components implemented without the use of external frameworks like React, Vue, or Angular.

The repository is structured as a monolithic collection of thirteen distinct sub-projects, each contained within its own numbered directory. These projects focus on core web development skills, including:

- DOM manipulation and traversal.
- Event listener management.
- Dynamic CSS class manipulation.
- Browser API integration (e.g., Video, LocalStorage, Intervals).

## Projects and Modules

While the `README.md` file itself does not contain executable code, it represents the entry point to the following modules within the repository:

| Project Folder | Primary Implementation Focus |
| --- | --- |
| `01-color-flipper` | Hex/Simple color generation and background manipulation. |
| `02-counter` | State tracking and conditional button styling. |
| `03-reviews` | Object-based data rendering and navigation (Next/Prev). |
| `04-navbar` | Toggle functionality and responsive layout management. |
| `05-sidebar` | Side navigation drawer logic. |
| `06-modal` | Overlay visibility and close-button event handling. |
| `07-questions` | Accordion-style UI with multiple expanding sections. |
| `08-menu` | Dynamic filtering of arrays and DOM rendering based on categories. |
| `09-video` | Integration of HTML5 video controls and loading screens. |
| `10-scroll` | Coordinate-based scrolling and fixed header logic. |
| `11-tabs` | Dataset-based content switching. |
| `12-countdown-timer` | Date object manipulation and real-time UI updates. |
| `13-lorem-ipsum` | Text generation based on numeric input. |

## Dependencies

The projects referenced by this documentation have zero external software dependencies, adhering to a "Vanilla" philosophy.

- **Runtime**: Any modern web browser.
- **Language**: ECMAScript 6+ (JavaScript).
- **Styling**: CSS3.
- **Markup**: HTML5.

## Notes

### Usage

To view a specific project, navigate to its respective directory and open the `index.html` file in a browser. Each project is designed to be self-contained within its folder (typically containing `index.html`, `style.css`, and an entry JavaScript file like `app.js`).

### Maintenance

- **Adding Projects**: When adding a new project, follow the existing naming convention (`XX-project-name`) to maintain ordering.
- **Language**: The project title and description in this file are written in Portuguese ("Projetos em JavaScript vanila").
- **Browser Compatibility**: As these are Vanilla JS projects, they rely on standard DOM APIs. Ensure any new additions check for API compatibility if targeting older browser versions.