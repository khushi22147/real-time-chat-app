# Real-Time Chat Application

## Project Overview

This project is a Real-Time Chat Application developed using Node.js, Express.js, and Socket.IO. It enables users to exchange messages instantly through WebSocket-based communication.

## Features

* Real-time messaging
* Socket.IO integration
* Frontend and Backend integration
* Multi-user communication
* Responsive user interface
* Instant message broadcasting

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* Socket.IO

## Project Structure

real-time-chat-app/
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore

## Installation

1. Clone the repository

git clone https://github.com/khushi22147/real-time-chat-app.git

2. Navigate to project directory

cd real-time-chat-app

3. Install dependencies

npm install

4. Start the server

node server.js

5. Open in browser

http://localhost:3000

## Working

1. User enters a message.
2. The message is sent to the Node.js server through Socket.IO.
3. The server broadcasts the message to all connected users.
4. All clients receive and display the message instantly.

## Future Enhancements

* User authentication
* Private chat rooms
* Message timestamps
* Online user status
* Chat history storage

## Author

Rushikesh Sawase
