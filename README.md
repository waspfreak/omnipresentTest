# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dependencies: 
  React Hook Form (For Inputs Validation)
  Style-component (Style Components)

# Folder Structure:
  UI Folder: content UI Elements to be able to use outside of Form
  Components: Use for Blocks of Components make use of Ui Components
  App File to render Application

# Task
Your task is to create a form which changes based on the country an employee is being onboard in and allows us to collect the needed information for that country.

There is some employee information that is needed for every country:
- Country of work
- First name
- Last name
- Date of birth
- Holiday allowance

Spain:

- Extra fields:
  - Marital status
  - Social insurance number
- Minimum holiday allowance is 30 days

Ghana:

- Extra fields:
  - Marital status
  - Number of children
- No laws on holiday allowance

Brazil:

- Extra fields:
  - Working hours
- Maximum holiday allowance is 40 days

# Proposal
### What problem are you trying to solve?
Clients needs add new employees to our service by using our platform to submit their details
We need to create and application able to add new user and collect some information for onboarding.
### Why should we solve it?
Is important to collect new User information so will help when we need to do onboarding.

### Solution Outline
To create a form so the client can add new user and send this information by email.
We need take in consideration, for each country will have some specifics field we will use country for 
show hide fields for each country

### App Structure
  Login
  Form 
### Actual State:
Application is available in stage URL,
Presentation layer: UI Done
### Next Stapes
Persistence layer: will be necessary to connect to backend and implement inside Client Admin

Additional Features: 
  Send Email New User Email


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
