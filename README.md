# Countdown App

#### A simple countdown timer web application built with React.

#### I put my task on AWS EC2. You can find it at this link: http://ec2-3-74-186-247.eu-central-1.compute.amazonaws.com/

## Table of Contents
- [Installation](#installation)
- [Docker Usage](#docker-usage)
- [Usage](#usage)
- [Code Styles](#code-styles)
- [Contributing](#contributing)
- [Todo](#todo)

## Installation

#### Clone this repository to your local machine. https://github.com/aslanyan66/task2023

### Without Docker

#### To install the Countdown application without Docker,you must have the following installed on your machine:

#### `Node.js` (version 16 or higher)
#### `Yarn` package manager (version 1 or higher)
### Follow these steps to install the Countdown application:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `yarn install` to install the necessary dependencies.
#### 3. Run `yarn start` to start the application.
#### 4. Open a web browser and go to http://localhost:3000 to view the application.

### To build the app for production, run:
#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Docker Usage

#### To install the Countdown application with Docker, you must have the following installed on your machine:

### `Docker` (version 21.1 or higher)
### `Docker-Compose` (version 1.29 or higher)

### Development
#### To run the application in development mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-dev` to start the application in development mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost:3000 to view the application.

### Production
#### To run the application in production mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-prod` to build and start the application in production mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost to view the application.

## Usage

Once the application is running, you can set a countdown timer by selecting a duration and unit of time from the dropdown menus, then clicking the "Start" button. The remaining time will be displayed in real-time, and the countdown will stop when it reaches zero.

## Code Styles
### To maintain code style consistency, you can use the following scripts: before committing changes:

#### `lint`: Use this script to check your code for errors and warnings. It uses ESLint and checks all JavaScript, TypeScript, JSON, and JSX files in the src directory.
#### `lint:fix`: Use this script to automatically fix some of the issues reported by the lint script.
#### `format`: Use this script to format your code automatically using Prettier. It formats all JavaScript, TypeScript, JSON, CSS, SCSS, and Markdown files in the src directory based on the configuration in .prettierrc file.

#### ● To run any of these scripts, simply type the corresponding command in your terminal:

#### `yarn lint`
#### `yarn lint:fix`
#### `yarn format`

## Todo

#### ● Add webpack configs for prod and dev modes
#### ● Coverage with unit tests

## Contributing
Contributions are always welcome! If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.

