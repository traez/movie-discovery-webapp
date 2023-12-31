# HNG 10 - FrontEnd - Stage 2 Project - Frontend Movie Discovery Web App

This is a solution to the [HNG 10 - FrontEnd - Stage 2 Project - Frontend Movie Discovery Web App](https://hngx.zuriboard.com/). The HNG Internship is an ambitious attempt to change the way education is done in Africa. It is the bridge between learning to code and becoming the best in the world..

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

### The Challenge/User Stories

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API. Requirements are stated below:

- User Interface:
  Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate:.
  You should list the top 10 movies on the homepage.
  They should be displayed in a grid layout with their movie posters.
  The Card component should display the movie title and release date.
  card - [data-testid: movie-card]
  movie poster - [data-testid: movie-poster]
  movie title - [data-testid: movie-title]
  movie release date - [data-testid: movie-release-date]

- Movie Search:
  Implement a search feature that allows users to search for movies by title.
  Display search results, including movie posters, titles, and release dates.
  Show a loading indicator while fetching search results.

- Movie Details:
  When i go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page.
  I should see
  title - [data-testid: movie-title]
  release date (in UTC) - [data-testid: movie-release-date]
  runtime (in minutes) - [data-testid: movie-runtime]
  overview - [data-testid: movie-overview]

- API Integration:
  Consume the TMDB API to fetch movie data.
  Use the following API endpoints:
  Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}

- Error Handling:
  Implement error handling to display meaningful error messages to users in case of API failures or other issues.

- Submission:
  Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
  Provide clear instructions on how to run your project locally in your README.md file.
  Ensure that the code is well-documented and organized.

- Update:
  Because of your numerous tags and DMs, We've decided, your design doesn't need to be perfect, Also not implementing the Search feature won't make you fail.
  Final One: Add to Favourites is not expected to be functional, just add small interaction on the icon/button(e.g change the background colour when it's clicked). If you make it functional you're a senior dev and you won't be penalised

### Screenshot

![](/public/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/movie-discovery-webapp](https://github.com/traez/movie-discovery-webapp)
- Live Site URL: [https://movie-discovery-webapp-traez.vercel.app](https://movie-discovery-webapp-traez.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid 
- Tailwind CSS (NOT USED!!!)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library 
- [Next.js](https://nextjs.org/) - React framework

### What I learned

- Learned how to parse API-keys as Environment-Variables (both in Next.js and vercel) to better handle sensitive information. 
- Understood how Query Params are parsed (code syntax convention) when fetching APIs.
- Note that, Search functionality were implemented, while favourite functionality was ignored. As later allowed in instructions.

### Continued development

- More HNG 10 Projects, TypeScript, Open Source and Technical Writing, Edgi Projects.

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

Happy 2 months birthday to my son Trevor. I love you so so much!
