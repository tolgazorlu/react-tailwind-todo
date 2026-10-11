# react-tailwind-todo

A Tailwind-styled todo app backed by Firebase, built with React.

## About

React, Tailwind and Firebase used for this project. This is a Tailwind todo app.

Live demo: [https://todo-41ad3.web.app/](https://todo-41ad3.web.app/)

![](https://github.com/tolgazorlu/react-tailwind-todo/blob/main/todo.gif)

## Features

- Add, list and manage todo items
- Todos persisted in Firebase Firestore
- Styled with Tailwind CSS

## Tech stack

- React (Create React App)
- Tailwind CSS
- Firebase / Firestore
- Firebase Hosting

## Project structure

```
src/
  App.js              # app shell
  firebase.js          # Firebase/Firestore init
  components/
    Header.js, Main.js, Footer.js, Todo.js
```

## Getting started

```bash
npm install
npm start
```

Create a `.env` file from `.env.example` with your own Firebase project's config:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

## Status

Learning project, not actively maintained.
