# Authentication System

A simple and secure authentication system built with Node.js, Express.js, and MongoDB. This project demonstrates how to implement user authentication using JWT (JSON Web Tokens) and bcrypt for password hashing. The system includes features like user registration, login, and secure API access.

## Features
- **OTP**: Allows users to signup and signin with one time password
- **User Registration**: Allows users to sign up with a username and password.
- **Login**: Secure login with JWT for session management.
- **Password Hashing**: bcrypt is used to hash user passwords.
- **Token-Based Authentication**: JWT is used to authenticate API requests.
- **Error Handling**: Detailed error messages for invalid inputs and authentication failures.
  
## Technologies Used
- **Node.js**: JavaScript runtime for building the back-end.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **MongoDB**: NoSQL database for storing user data.
- **Redis**: redis is used for sentensive data like refresh token
- **JWT (JSON Web Token)**: For stateless authentication.
- **bcrypt**: For securely hashing passwords.

## Getting Started

To get the project up and running on your local machine, follow these instructions:

### Prerequisites
- Node.js (v12 or higher)
- MongoDB (either local or cloud instance, e.g., MongoDB Atlas)

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/authentication-system.git
   
2. Navigate into the project folder:

   ```bash
   cd authentication-system

3. Install dependencies:

   ```bash
   npm install
   
4. Set up environment variables: Create a .env file in the root directory and add the following:

   ```bash
   MONGO_URI=<Your MongoDB URI>

5. Run the application:

   ```bash
   npm start
   
The server should now be running at http://localhost:3000.

### Swagger Documentation
You can view the API documentation generated with Swagger by following these steps:

1. After starting the application, open your browser and go to:
   ```bash
   http://localhost:3000/api-docs


2. The Swagger UI will display, showing all available endpoints, request parameters, and responses.

