<!-- Shields -->
![](https://img.shields.io/badge/Redux-informational?style=flat&logo=<LOGO_NAME>&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/React-orange)
![](https://img.shields.io/badge/Node.js-green)
![](https://img.shields.io/badge/JavaScript-blue)
<img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"/>
<img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>



# Crate

This project works in legacy code in an eCommerce store that sells subscrition clothing packages. Our team added the ability for a user to take a survey and assign a style based on their results.

### Table of Contents
  - [Application Architectual Overview](#application-architectural-overview)
  - [How to Install Application](#how-to-install-application)
  - [How to Use Application](#how-to-use-application)
  - [Testing](#testing)
  - [Licenses](#licenses)
  - [Contact](#contact)

## Application Architectural Overview

<p align="center">
 <img src="https://i.imgur.com/LKOUbuQ.png">
</p>

<p align="center">
 <img src="https://i.imgur.com/CIK7VnR.png">
</p>



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
* open a new terminal tab
```
cd code/web
npm start
```
* Open localhost:8000 in your web browser
* Open localhost:3000 in your web browser

## How to Use Application

Once this application is open in your web browser, create an account and click on `Subscriptions` to add a new subscription.
You should be redirected to take a survey. The survey results will give you an assigned style.

The survey gives you FIVE questions to answer, each with four possible choices

<a href="https://imgur.com/dYqTH77"><img src="https://i.imgur.com/dYqTH77.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/EW9kWMy"><img src="https://i.imgur.com/EW9kWMy.png" title="source: imgur.com" /></a>

<a href="https://imgur.com/lzEp0dw"><img src="https://i.imgur.com/lzEp0dw.png" title="source: imgur.com" /></a>

You then choose the option that resonates with you

<a href="https://imgur.com/2nyYNOO"><img src="https://i.imgur.com/2nyYNOO.png" title="source: imgur.com" /></a>

The pictures selected will have a border to indicate that they have been selected

You are then taken to the profile page, which has your style preference as well as an image that represents that preference

<a href="https://imgur.com/0PU0ypT"><img src="https://i.imgur.com/0PU0ypT.png" title="source: imgur.com" /></a>

## Testing

* For testing we used Jest for unit and feature testing.

* In order to run the tests, run `npm run test` in the command line and you should have all passing tests.
  
## Licenses

  * JavaScript
  * React 
  * Redux
  * Node.js
  * GraphQL

## Contact

#### Aaron Townsend: [GitHub](https://github.com/atownse)
#### Bruce Gordon: [GitHub](https://github.com/bruce-gordon)
#### Christopher Allbritton: [GitHub](https://github.com/Callbritton)
#### George Soderholm: [GitHub](https://github.com/GeorgieGirl24)
#### Sage Gonzales: [GitHub](https://github.com/SageOfCode)
