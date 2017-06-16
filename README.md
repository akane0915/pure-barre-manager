# _Pure Barre Manager_

#### _This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.  Pure Barre is a nation-wide boutique fitness studio.  The purpose of this application is to help the Pure Barre Portland manager track its employees (teachers, front desk staff, etc) to ensure the studio is at tip top shape! June 16, 2017_

#### By _**Asia Kane**_

![Homepage](resources/images/homepage.png)

## Description

Every zoo should have an easy-to-use application to help its employees track animals.  This helps to ensure the animals are cared for properly.  After all, the zoo is their home!  This app fulfills the following user stories:

As a user:

* As a user, I'd like to visit a page to see a list of all PB employees.
* As a user, I'd like to click on an employee in the list to visit their profile page.
* As a user, I'd like the option to visit an "About" page
* As a user, I'd like all data persisted in Firebase
* As a user, I'd like to filter the list of users by their particular role (teacher, front desk staff, etc)
* As an administrator, I want the ability to add new users.
* As an administrator, I want the ability to edit user profiles.
* As an administrator, I want the ability to delete a user.

The application structure is outlined below.  

Models:
  - Employee (Properties: name, role, aboutMe, strength (great at motivating clients, excellent at memorizing choreography), schedulePreference (morning, day-time, evening), classesTaught)

Entry Point:
  - main.ts

Modules:
  - Root module (app.module.ts)

Router:
  - app.routing.ts

Services:
  - employee.service.ts

Components:
  - Root component (app.component.ts)
  - home.component.ts
  - about.component.ts
  - employee-detail.component.ts
  - new-employee.component.ts
  - edit-employee.component.ts

Pipes:
  - schedule-filter.pipe.ts

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [TypeScript](https://www.typescriptlang.org/)
* [Angular2](https://angular.io/)

## Installation

In your terminal:
* `git clone https://github.com/akane0915/pure-barre-manager`
* `cd pure-barre-manager`
* `npm install`
* `npm install typescript`
* `apm install atom-typescript`
* `bower install`
* Open project in text editor.  Create src/app/api-keys.ts file.  Login to firebase to create your own project.  Type the following in the api-keys.ts file replacing all "Your" statements with your own firebase credentials:

export var masterFirebaseConfig = {
  apiKey: "Your Key,
  authDomain: "Your Doman",
  databaseURL: "Your URL",
  projectId: "Your Project Id",
  storageBucket: "Your Bucket",
  messagingSenderId: "Your Sender Id"
};

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* If you would like to make changes to this project, do so in the text editor.
* Make frequent commits with detailed comments.
* Submit changes as pull request to Asia at akane0915 on Github.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

If you receive the following error: Error: Can't resolve 'promise-polyfill'
Run `npm install promise-polyfill --save-exact`

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used

* Angular2
* Angular CLI
* Firebase Database Manager
* TypeScript
* Node
* Bower
* HTML
* CSS
* Bootstrap https://getbootstrap.com/
* ES6

## Known Bugs
_N/A_

## Support and contact details
_I encourage you to update/make suggestions/refactor this code as you see fit. I am always open to improvement! Please contact Asia Kane at asialkane@gmail.com with questions._

## Screen Shots

![Animal Details](resources/images/animal-details.png)
![New Animal](resources/images/new-animal.png)
![Edit Animal](resources/images/edit.png)

### License
  *This software is licensed under the MIT license*
  Copyright © 2017 **Asia Kane**
