# MC Payment Interview

1. To run the Find Two Sums question, open your terminal / command prompt and run 
```
node findTwoSums
```
2. Budget application

To run this application make sure to do `yarn install` to install all of the dependencies and run the app with `yarn dev` in development mode.
The app is made pure HTML, CSS, and Javascript with modern ES6 to use module and class. The app is made to behave like a Singe-Page Application so whenever the user navigate through the links the page will not refresh because it is using the browser's History API. By default the app will run on port 3000 you can provide your own `.env` file to run it different port.

A little explanation about the app, it is an app that made to track all of your income, expenses and balance, you will be able search for a specific transaction that has been made. Items that has a green price tag represents your income and the red represent your expenses.

Note:
```
1. On initial load, the data will be fed from a mock data (`/src/repository/mock.js`).
2. Since the items is fed through a mock data, items that has an even price tag is the Income, whereas the items that has an odd value are Expenses
```
