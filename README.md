# Social Network API

## Description
The **Social Network API** is a backend application that allows users to create and manage a social network. It provides functionality to:
- Create and manage users.
- Share thoughts (posts).
- React to thoughts with reactions.
- Add and manage friends.

This project uses **Express.js** for routing, **MongoDB** as the NoSQL database, and **Mongoose** as the Object Data Modeling (ODM) library. It provides RESTful API endpoints to perform CRUD operations for users, thoughts, and reactions.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd social-network-api
   ```

2. **Install the necessary packages**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Set up the database**:
   Make sure you have MongoDB installed and running on your machine. You can either use a local MongoDB server or connect to a cloud-hosted MongoDB instance.

4. **Start the server**:
   Run the following command to start the server:
   ```bash
   npm start
   ```
   The server will start running on `http://localhost:3001`.

---

## Usage

Once the server is running, you can use an API client like **Insomnia** or **Postman** to interact with the API endpoints.

### Example of a POST request to create a new user:
1. Open Postman or Insomnia.
2. Set the request type to **POST**.
3. Use the following URL:
   ```
   http://localhost:3001/api/users
   ```
4. Add the following JSON body:
   ```json
   {
     "username": "johndoe",
     "email": "johndoe@example.com"
   }
   ```
5. Click **Send** to create the user.

---

## API Endpoints

### **User Routes**:
- `GET /api/users` - Get all users.
- `GET /api/users/:id` - Get a single user by ID.
- `POST /api/users` - Create a new user.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

### **Thought Routes**:
- `GET /api/thoughts` - Get all thoughts.
- `GET /api/thoughts/:id` - Get a single thought by ID.
- `POST /api/thoughts` - Create a new thought.
- `PUT /api/thoughts/:id` - Update a thought by ID.
- `DELETE /api/thoughts/:id` - Delete a thought by ID.

### **Reaction Routes** (Subdocument in Thought):
- `POST /api/thoughts/:thoughtId/reactions` - Create a new reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction from a thought.

---

## Technologies Used

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database for storing user data and thoughts.
- **Mongoose** - ODM for MongoDB to simplify database operations.
- **Insomnia/Postman** - For testing the API.
- **JavaScript** - Primary language used in the project.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Demo

[Link to your video walkthrough]

---

## Questions

If you have any questions about this project, feel free to contact me at: Melvinurias2@gmail.com.

---

This README file outlines the main parts of your project. You can customize it further to include more specific information, such as additional routes, deployment steps, or any challenges you encountered during development. Let me know if you need any additional sections!