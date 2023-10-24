# Addressify

# Deployment
  Addressify is deployed on vercel and can be visited at addressify.vercel.app
  Other actions like building, testing or serving can all be done via npm!

# My Approach:
  When looking over the design challenge I had a few things that stood out to me initially. 
  The first of which was the breakdown of users based on their platform of choice, with 70% of users being mobile based I recognized the need to have responsive design to accomodate phone screens. Additionally, the main requirement was to display 10 users for which i decided to showcase as 
  cards that would then be in a grid to accomodate screen size. Using tailwind CSS I was able to construct the cards along with a header and footer 
  to make up the inital page. Data was managed as a part of a service which then made the data available on the details page to showcase each
  user individually. Although not required I also opted to impliment a search bar that would allow the user to search for different users based
  off their first name. With 10 inital users displayed I wanted to make it such that more users could be added my approach to this pagination was 
  to create a load more button that would allow users to add more cards in sets of 10. 

# Features
  CSS Animations as the grid elements fade in,
  Search bar to allow the user to query the address book by a name,
  pagination to load an additional 10 users to the website,
  Use of services to manage data,
  Heirarchy of parent and child components with emitters,
  Tailwind CSS to make a very userfriendly and responsive design,
  Deployed live on vercel,
  98 for accessibility & 90 for SEO on Lighthouse!

# How I would Improve
  The one main feature I wanted to work on but didn't get the chance to was a search that allowed users to search based on name and navigate
  directly to the details page. I envisioned a user typing a name into search and seeing a drop down of potential matches that could then be
  clicked to navigate directly to the selected user's details page. implimenting this would take another component and around 2 hours

# AddressBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
