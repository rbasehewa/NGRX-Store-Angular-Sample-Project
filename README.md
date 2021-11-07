# NgRxAngularSampleProject

This project was generated with [Angular NgRx](https://ngrx.io/guide/store)

## NgRx Store

Managing state in not Angular does. Basically, we need store somehow store data and structure them and use them in some way. Angular does not have something like this.

## Setup locally API for this project

I've using to retrive data from this repo [Copy of the public API](https://github.com/gothinkster/koa-knex-realworld-example). You can setup matter of minutes.

after clonnig the project, you need to setup the project on you machine.

- Install dependencies

  - npm i

- Need to setup the database

  - in the package json file need to run db:migrate (create database file) and db:load (filles data it's already prepared)
    - npm run db:migrate
    - npm run db:load

- run the project

  - npm start
  - progress Store/ redux
