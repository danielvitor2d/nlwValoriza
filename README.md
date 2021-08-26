<h1 align="center"> NLW Valoriza</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danielvitor2d/nlwValoriza?style=flat-square">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danielvitor2d/nlwValoriza?style=flat-square">
  
  <a href="https://github.com/danielvitor2d/nlwValoriza/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielvitor2d/nlwValoriza?style=flat-square">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/danielvitor2d/nlwValoriza?style=flat-square">

  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/danielvitor2d/nlwValoriza?style=social">
	<img alt="GitHub Forks" src="https://img.shields.io/github/forks/danielvitor2d/nlwValoriza?style=social"> 
</p>
<p align="center">
  <a href="#man_technologist-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-how-to-execute">How to execute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#keyboard-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :man_technologist: About
:man_technologist: ``` Sobre ```

NLW Valoriza is an API developed in Next Level Week Together, trail NodeJS, given by [Dani Leão](https://github.com/danileao).

## :rocket: Technology
:rocket: ``` Tecnologias ```
- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [JWT](https://jwt.io/)
- [OAuth 2.0](https://oauth.net/2/)
- [Nodemailer](https://nodemailer.com/)

## :gear: Routes
:gear: ``` Rotas ```
- POST - /users (Create user)
- POST - /tags (Create tag)
- POST - /login (Authenticate user)
- POST - /compliments (Create compliment)
- GET - /users (List users)
- GET - /tags (List tags)
- GET - /users/compliments/send (List compliments by user sender)
- GET - /users/compliments/receive (List compliments by user receiver)

## :computer: How to execute
:computer: ``` Como executar ```
- Clone this repository: `git clone https://github.com/danielvitor2d/nlwValoriza`
- Run `yarn install` and `yarn init` to install dependencies
- Run `yarn typeorm migration:run` to prepare database
- Run `yarn dev` to start the application
- Finally, access http://localhost:3000 to consume the API

## :keyboard: How to contribute
:keyboard: ``` Como contribuir ```
- Fork the repository ans follow the steps below
```bash
### Clone your fork
$ git clone your-fork-url
$ cd nlwValoriza

### Create a branch
$ git checkout -b your-feature

### Commit your changes
$ git commit -m "feat: My new feature"

### Send code to your branch
$ git push origin your-feature
```
- Ready