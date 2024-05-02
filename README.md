## Faculty Management Project Overview

This project aims to create a backend system for managing faculty members using Node.js and Express.js framework. Additionally, it will include integration with MongoDB database for data storage. The project will have three main functionalities:

1. **Routes Setup:**

   - Using the Express.js package, create three routes:
     - GET `/member`: Retrieve all faculty members.
     - POST `/member`: Add a new faculty member.
     - DELETE `/member/:id`: Delete a faculty member by ID.

2. **Controllers Creation:**

   - Create a controller for each route to handle the corresponding functionality.
     - `getAllFacultyMembers`: Retrieve all faculty members.
     - `addFacultyMember`: Add a new faculty member.
     - `deleteFacultyMember`: Delete a faculty member by ID.

3. **Schema Definition:**

   - Define a schema for faculty members in MongoDB, including the following fields:
     - **String** `name`: Name of the faculty member.
     - **Number** `age`: Age of the faculty member.
     - **String** `gender`: Gender of the faculty member.
     - **Number** `exp`: Experience of the faculty member.
     - **String** `type`: Type of employment (e.g., Full Time, Part Time).
     - **String** `qualification`: Qualification of the faculty member (e.g., Ph.D, Master's).

4. **Database Connection:**
   - Connect to MongoDB database to store and retrieve faculty member data.

Once the backend of the project is set up, the frontend team will integrate the following APIs into the website:

After completing the backend setup, integrate the developed APIs into the website

- **API Integration:**
  - Use the provided APIs to perform the following actions on the frontend:
    - Retrieve all faculty members.
    - Add a new faculty member.
    - Delete a faculty member.
