# Simple Weather App using OpenWeatherMap API

This small application is a demo of OpenWeatherMap's [5 day weather forecast](https://openweathermap.org/forecast5) API. Tech stack used for this project is listed below with explanations. The running application can be accessed from this [link](http://owm-example.vercel.app/).

> **Important Note:** Since cors-anywhere demo server is now providing [limited access](https://github.com/Rob--W/cors-anywhere/issues/301), before opening the app link, access should be requested using the button on [this page](http://cors-anywhere.herokuapp.com/corsdemo).

- [Create React App](https://github.com/facebook/create-react-app) - Used to initialize this project by using the official repository.
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Used for testing React components.
- [Jest](https://github.com/facebook/jest) - Used with React Testing Library for JS testing.
- [Mock Service Worker](https://github.com/mswjs/msw) - Used to mock API calls.
- [axios](https://github.com/axios/axios) - Used for data fetching from OpenWeatherMap API.
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere) - Used to deal with CORS issues when making calls to API.
- [Tailwind CSS](https://www.tailwindcss.com) - Used for styling. Tailwind is really useful for fast UI styling and suits perfectly for this small project.
- [Vercel](https://vercel.com) - Used for easy and fast deploy.
