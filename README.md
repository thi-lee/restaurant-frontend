# Dara's Restaurant

A personal project applying MEAN (MongoDB, Express, Angular, NodeJS) stack to manage a restaurant admin website.

## Table of contents

- [Overview](#overview)
  - [About](#about)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### About 

I started with questions. *What are CRUD operations?* *What are HTTP methods?* *How do I get data from database and display everything on a website?* *How can I make frameworks do the work that they were born to do?* And to answer those questions, I made something that helped me understand and learn. I made something that excited me and challenged me every day. I had fun figuring things out. 

### Screenshot

![]()

### Links

- Live Site URL: [Dara Restaurant Page](https://dara-restaurant.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap 4
- [MongoDB](https://www.mongodb.com/1) - The database for modern application
- [ExpressJS](https://expressjs.com/) - NodeJS web application framework
- [Angular](https://angular.io/) - A Typescript-based open-source web application framework
- [NodeJS](https://nodejs.org/) - A Javascript runtime
- [npm](https://www.npmjs.com/) - A package manager for the JavaScript programming language

### What I learned

Connections are what make me fascinated. I learned that I could use HttpClient, an Angular service, to send requests from client to server. When the server sends a response, it'll be an Observable and I'd turn it into a Promise and manipulate whatever I received. Out of many things I have learned, this made me most proud. 

Below is a code snippet:

```ts
    getData(paramPage?: any) {
        return this.http.get(`${this.endPoint}/getAll/${paramPage}`, this.options).toPromise();
    }
    sendData(dish: {}) {
        return this.http.post(`${this.endPoint}/insertDish`, dish, this.options).toPromise();
    }

    removeData(dishId: any) {
        return this.http.post(`${this.endPoint}/removeDish`, { "_id": dishId }, this.options).toPromise();
    }

    editData(dishId: any, update: {}) {
        return this.http.post(`${this.endPoint}/editDish`, {"_id": dishId, update: update}, this.options).toPromise();
    }
```

### Continued development

Error handling was missing in this project, and that will be my next step. 

Angular is a powerful tool if I make use of it, so I'll make it a goal to continue with Angular. I'm thinking particularly of Angular Forms, but I bet there will be interesting topics waiting for me on this journey. 

### Useful resources

- [Codevolution](https://youtube.com/playlist?list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G) - I stumbled upon this tutorial after days getting stuck on authentication (I wrote about this struggle [here](https://thilee.blog/category/365-project/the-mind/)). I'm grateful that Codevolution breaks the problem into small chunks and provides easy-to-understand explanation. 

- [Google](https://www.google.com), [DuckDuckGo](https://duckduckgo.com/), and [StackOverflow](https://stackoverflow.com/) - These were helpful when I get bugs or when I was planning on steps to take for the next function I'm writing. They also connected me to helpful resources. 

- The documentations [MongoDB](https://www.mongodb.com/1), [MDN Web Docs](https://developer.mozilla.org/en-US/), [Angular](https://angular.io/)

## Author

- Github - [Dara Thi-Le](https://github.com/thi-lee)

## Acknowledgments

This is where I'd show appreciation towards my seniors at [Fundiin](https://fundiin.vn/). I was on my own trying to understand random pieces of web development, and if it wasn't for them, I would not have been working on one function of the project to the next. I would not have been ready to spend many days on one site. I would have given up, if it's not them who kept me accountable and who guided me along the way. 
