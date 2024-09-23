# MEDITAL Weather Search Page

## Introduction

This project is a single-page web application that allows users to search for weather information for a specific location using the OpenWeather API. The application focuses on user experience and visual appeal.

## Functional Requirements

### 2.1 Search Functionality:
- [v] The page features a prominent search bar where users can enter the name of a city or location.
- [v] The search can be triggered by pressing the "Enter" key or clicking a dedicated search button.
- [v] The application handles invalid or empty search inputs gracefully, providing appropriate feedback to the user.

### 2.2 Weather Data Display:
- [ ] Upon a successful search, the application retrieves weather data from the OpenWeather API for the specified location.
- The displayed weather information includes:
  - [ ] Current temperature (in Celsius and Fahrenheit)
  - [ ] Weather condition (e.g., Sunny, Cloudy, Rainy)
  - [ ] Humidity
  - [ ] Wind speed
  - [ ] An icon representing the weather condition
- [ ] The data is presented in a clear, visually appealing format, using cards, tables, or other UI elements.

### 2.3 Error Handling:
- [ ] The application gracefully handles errors that may occur during the API call (e.g., invalid API key, location not found).
- [ ] Error messages are informative and user-friendly.

## API Integration
- [ ] The application utilizes the OpenWeather API to retrieve weather data.
- [ ] An API key is required (obtainable from OpenWeather).
- [ ] API calls are made using appropriate HTTP methods (e.g., GET).
- [ ] The application handles different response codes from the API and displays appropriate messages to the user.

## Creative Design Elements
- [ ] The application features creative and appealing design elements.

## Technical Requirements
- [ ] The application is developed using React as the front-end framework.
- [ ] The code is well-structured, documented, and easy to maintain.

## Testing
- [ ] Thorough testing is conducted to ensure the application functions correctly and handles different scenarios (valid/invalid inputs, API errors, etc.).

## Development Environment Setup and Running the Application

### 7.1 Zero-Environment Approach
- [ ] The application is runnable without requiring users to have a pre-configured development environment.
- Clear and step-by-step instructions are provided for setting up the necessary environment from a completely clean slate, including:
  - [ ] Installing Node.js and npm (or yarn)
  - [ ] Installing project-specific dependencies using a package manager (npm or yarn)
  - [ ] Instructions on running a development server (if applicable)

### 7.2 Detailed Setup Instructions
- [ ] A dedicated section outlines the entire process, from installing basic tools to running the application locally.
- [ ] Instructions are broken down into small, manageable steps with clear explanations.
- [ ] Screenshots or screen recordings are included to aid visual learners.
- [ ] Instructions consider different operating systems (Windows, macOS, Linux) and provide platform-specific details.

### 7.3 Example Setup Instructions
1. **Install Node.js and npm**: Download and install Node.js from the official website [https://nodejs.org/](https://nodejs.org/). This will also install npm.
2. **Navigate to Project Directory**: Open your terminal or command prompt and navigate to the root directory of the project.
3. **Install Dependencies**: Run the command `npm install` to install all project dependencies listed in the `package.json` file.
4. **Start Development Server**: Run the command `npm run dev`. This will start a local development server and open the application in your default web browser.

## Submission
- Submission is via a GitHub repo link to Glints.id chat to the employer.

Good luck!
