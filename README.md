# Node Project Setup

Welcome to the Node Project Setup! This repository provides a template for quickly starting a new Node.js project with a standardized structure and configuration.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Basic project structure
- Pre-configured `package.json`
- ESLint and Prettier for code quality
- Sample scripts for starting the server and running tests

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pratik1091999/node-project-setup.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-project-setup
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

To start the development server, run:

```bash
npm run prod
```

## Creating a New Entity

To create a new entity, run the following command in your bash terminal:

```bash
./scripts/bash/codegen-node-be.sh <Entity Name in CamelCase>
```

Replace `<Entity Name in CamelCase>` with the desired name of your entity.



Feel free to modify the scripts in the `package.json` file as needed.

## Project Structure

Here’s an overview of the project structure:

```
node-project-setup:
|
│   .env.development           # Environment variables for development
│   .env.production            # Environment variables for production
│   .gitignore                 # Specifies files to be ignored by Git
│   package-lock.json          # Lock file for npm dependencies
│   package.json               # Project metadata and dependencies
│   README.md                  # Project documentation
│   
├───public                     # Static files served by the application
│       index.html             # Main HTML file
│
├───scripts                    # Custom scripts for project management
│   ├───bash                   # Bash scripts
│   │       codegen-node-be.sh  # Script for code generation
│   │
│   └───template               # Template files for snippets
│       └───snippet            # Snippet structure
│           ├───controllers
│           │       entity.js   # Sample controller file
│           │
│           ├───models
│           │       entity.js   # Sample model file
│           │
│           └───routes
│                   entity.js    # Sample route file
│
└───src                        # Source code for the application
    │   app.js                 # Main application entry point
    │   constants.js           # Constants used throughout the app
    │   server.js              # Server setup and configuration
    │
    ├───config                 # Configuration files
    │       config.js          # Main configuration file
    │
    ├───controllers            # Application controllers
    │   └───api                # API versioning
    │       └───v1             # Version 1 of the API
    │               user.js      # User controller
    │
    ├───db                     # Database setup and configuration
    │       index.js           # Database connection file
    │
    ├───middleware             # Middleware functions
    │       morgan.js          # Middleware for logging HTTP requests
    │
    ├───models                 # Data models
    │       user.js            # User model
    │
    ├───routes                 # Route definitions
    │   └───api                # API versioning
    │       └───v1             # Version 1 of the API routes
    │               user.js      # User route
    │
    └───utils                  # Utility functions
            apiError.js        # API error handling
            apiResponse.js      # API response formatting
            asyncHandler.js      # Helper for async functions
            errorCode.js        # Error codes
            errorMessage.js     # Error messages
            logger.js           # Logger utility
```

