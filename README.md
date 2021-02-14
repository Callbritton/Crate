<!-- Shields -->
![](https://img.shields.io/badge/Redux-informational?style=flat&logo=<LOGO_NAME>&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/React-orange)
![](https://img.shields.io/badge/Node.js-green)
![](https://img.shields.io/badge/JavaScript-blue)

# Crate

This project works in legacy code in an eCommerce store that sells subscrition clothing packages. Our team added the ability for a user to take a survey and assign a style based on their results.

### Table of Contents
  - [How to Install Application](#how-to-install-application)
  - [How to Use Application](#how-to-use-application)
  - [Testing](#testing)
  - [Licenses](#licenses)
  - [Contact](#contact)

## How to Install Application

For usage on your local machine, in your terminal navigate to a directory to store this application and run the instructions listed below:

```
git clone git@github.com:SageOfCode/Crate.git
cd Crate
npm setup
psql
CREATE DATABASE Crate;
exit
cd code/api
npm start
```
open a new terminal tab
```
cd code/web
npm start
```
Open localhost:8000 in your web browser
Open localhost:3000 in your web browser

## How to Use Application

Once this application is open in your web browser, create an account and click on `Subscriptions` to add a new subscription.
You should be redirected to take a survey. The survey results will give you an assigned style.

## Testing

* For testing we used Jest for unit and feature testing.

* In order to run the tests, run `npm run test` in the command line and you should have all passing tests.
  
## Licenses

  * JavaScript
  * React 
  * Redux
  * Node.js

## Contact

#### Aaron Townsend: [GitHub](https://github.com/atownse)
#### Bruce Gordon: [GitHub](https://github.com/bruce-gordon)
#### Bruce Gordon: [GitHub](https://github.com/Callbritton)
#### George Soderholm: [GitHub](https://github.com/GeorgieGirl24)
#### Sage Gonzales: [GitHub](https://github.com/SageOfCode)
