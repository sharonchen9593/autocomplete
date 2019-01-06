This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Though Process

At first, I wanted to create a separate component for both the city search box and the books search box. But I soon realized they were both the same thing just with different data, so I decided to just create one reusable component called `Search` and have it call a `renderData` function that will render the data inside of App.js.
