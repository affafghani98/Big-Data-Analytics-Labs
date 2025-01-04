# MongoDB LinkedIn Profile Management Application

This application allows users to store, retrieve, and manage LinkedIn profile data using MongoDB. It demonstrates fundamental CRUD (Create, Read, Update, Delete) operations within a Node.js and Express framework.

## Features

- **Add Profiles**: Store LinkedIn profile information, including username, LinkedIn URL, position, and company.
- **View Profiles**: Retrieve and display stored LinkedIn profiles.
- **Update Profiles**: Modify existing LinkedIn profile information.
- **Delete Profiles**: Remove LinkedIn profiles from the database.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local instance of MongoDB

## Installation

---
1. **Clone the Repository**:

   ```bash
   git clone <url>
   cd <path-to-this-task-folder>
 ---  
 
2. Install Dependencies:
```bash
npm install
```
---

3.Configure Environment Variables:

- Create a .env file in the project root:
 ```bash
  touch .env
```
- Add your MongoDB connection string to the .env file:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```
-Replace your_mongodb_connection_string with your actual MongoDB URI. For guidance on obtaining this URI, refer to MongoDB's official documentation.


4. Start the Application:
```bah
npm start

```
---

## Usage
- Add a Profile: Navigate to http://localhost:3000 and fill out the form to add a new LinkedIn profile.
- View Profiles: Access http://localhost:3000/get-users to see all stored profiles.
-Update and Delete Profiles: Implement corresponding frontend forms and API endpoints to handle update and delete operations as needed.

---

## Contributions
- Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License
This project is licensed under the MIT License.
