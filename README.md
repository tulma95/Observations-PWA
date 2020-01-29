# Observations app

![](https://github.com/tulma95/Observations-PWA/workflows/Node.js%20CI/badge.svg)

In observations application you can add new observations and show them to your friends. Observations are saved locally so you don't need internet access for it to work.

Application in Heroku:
[Heroku link](https://observations-app.herokuapp.com/)

## Tech stack

The application is made with react. The main focus was to create a mobile first progressive web application. The Observations are saved into a client-side storage using IndexedDB. The application works in offline mode using serviceworkers so users can add new observations when internet connection is not available. End to end tests are made with Cypress. The tests cover all possible use cases expect coordinates.

## Experiences during development

While creating the application I had to learn more about what PWA really means, how serviceworkers work and how to save data to a browser. I found them so interesting that I implemented all the bonus features, which was fun.

## How to install and build

1. Clone repository and move to it:

```
git clone https://github.com/tulma95/Observations-PWA
cd Observations-PWA
```

2. Install node modules with command:

```
npm install
```

3. build project with command:

```
npm run build
```

## Starting server

To run application in `http://localhost:5000/` you have to first build the application and then run command:

```
npm run serve
```

## Cypress tests

To run Cypress E2E tests you have to build the app and then open development server with command

```
npm start
```

After opening development server run command

```
npm run cypress:run
```

for CLI tests or

```
npm run cypress:open
```

for Cypress own graphical interface
