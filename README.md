# TakeHome - Rio Money Transfer

This is the TakeHome technical assessment for the Weather Forecast application for Rio Money Transfer - Software Engineer (Frontend) position.

## Decissions made

Stack: Vite, React, Typescript, React Query, Material UI, React Error Boundary.

## Features Implemented
- Interactive three-tab interface with predefined cities.
- Hourly and daily weather forecasts for each selected city.
- Service layer integration with the OpenWeather API.
- Manual refresh functionality to update weather data on demand.
- Global footer displaying the "Last updated" timestamp.
- **Bonus:** Search functionality and city filtering using a processed dataset.

## Implementation notes
- Used Vite to bootstrap the project.
- Used React Query to handle data fetching and caching.
- I found openWeather Type in this public [gist](https://gist.github.com/TheJoeFin/5d9be4cb2d5ca0136021cb9ce2a9c9e5) so i used it to type the API responses.
- Apply styles using Material UI system and sx prop and style props, because the style is simple i avoided using styled components or custom themes, understanding that Material UI can add size to the bundle but for this assessment i prioritized development speed.
- Created a WeatherContext to manage global state such as last update timestamp and the current city and tabs.
- Bonus, I was evaluating using a better approach to handle a file with 20K rows (usually a file with 10K is not a problem for modern browsers) so i decided because time was a constraint dowload a json file when the user tries to search for a city, this way the initial load is fast and the user can search any city without performance issues. The json file was generated from the provided CSV using a simple script. The json file is located in the public folder so it can be fetched when needed. A better approach would be to implement a service worker to handle this in the background or use the openWeather city list API.

## Improvements
* Implement unit and integration tests using Jest and RTL. While a TDD approach was considered, I prioritized feature completion due to the assessment's time constraints.
* Expand error handling beyond the global Error Boundary to provide more granular, component-level UI feedback.
* Enhance the search component UX and implement local storage persistence for user-selected cities.
* Improve visual feedback within the search component and refine general loading indicators across the app.
* Refactor the global state by decoupling the context into specialized providers (e.g., a UIContext for tabs and a WeatherContext for timestamp management).

---

Thanks for the opportunity to work on this assessment. I look forward to your feedback!

