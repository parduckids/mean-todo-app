# MEAN Stack Todo Application

This Todo application is built with the MEAN stack, encompassing MongoDB, Express.js, Angular, and Node.js. It offers a sleek interface for managing todo items with functionalities to create, read, and delete tasks. The application showcases CRUD operations, providing a straightforward yet powerful tool for task management.

## Project Structure

The project is organized into two primary directories:

- **`backend/`**: Houses the Express.js and Node.js code for server and API logic.
- **`ui/todoapp/`**: Contains the Angular project for the frontend interface.

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js and npm ([Download](https://nodejs.org/))
- MongoDB ([Download](https://www.mongodb.com/try/download/community))

### Backend Setup (2 terminal)

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    node index.js
    ```

The server will run on `http://localhost:3000`. Make sure MongoDB is operational.

### Frontend Setup

1. Navigate to the `ui/todoapp` directory:
    ```
    cd ui/todoapp
    ```
2. Install Angular CLI globally (if not already installed):
    ```
    npm install -g @angular/cli
    ```
3. Install project dependencies:
    ```
    npm install
    ```
4. Launch the development server:
    ```
    ng serve
    ```

Access the application at `http://localhost:4200`.

## Features

- **Create Todo Items**: Users can add tasks to their list.
- **Read Todo Items**: Users can view all tasks.
- **Delete Todo Items**: Users can remove tasks from the list.

## Potential Extra Features

To enhance the application, consider implementing the following features:

- **Edit Todo Item**: Introduce an edit button for each todo item, allowing users to modify the text of existing tasks.
- **Complete Tasks**: Add a checkbox next to each todo item. Checking the box will mark the task as completed and move it to a "Completed Todos" section.
- **Completed Todo History**: Completed tasks should be visually distinct (e.g., greyed out) and possibly moved to a separate section or page to keep the main list focused on active tasks.
- **Color Code Todos**: Implement a feature to color-code tasks based on their priority or importance, adding an additional layer of organization and visual cues.


## Potential Security Improvement

- For enhanced security, store sensitive information such as the MongoDB password in a .env file and access it via process.env in your application. This prevents sensitive data from being hard-coded or tracked in version control.
