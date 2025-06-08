T-Social - A Facebook Clone
T-Social is a social media web application inspired by Facebook, designed to replicate core functionalities such as user authentication, posting, commenting, liking, and friend management. It aims to provide a familiar social networking experience with a modern and responsive user interface. The project is built for educational purposes and to demonstrate proficiency in full-stack web development.
Live Demo | GitHub Repository
Table of Contents

Features
Technologies Used
Installation
Usage
Folder Structure
Contributing
License
Contact

Features
T-Social replicates key features of a social media platform, including:



Feature
Description



User Authentication
Register, login, and logout functionality with secure password handling.


User Profiles
Create and edit user profiles with profile pictures, bios, and personal details.


Posts
Create, edit, and delete posts with text, images, or videos.


Comments
Add, edit, and delete comments on posts.


Likes
Like and unlike posts to engage with content.


Friend System
Send, accept, and manage friend requests.


News Feed
Display a dynamic feed of posts from friends and followed users.


Real-time Notifications
Receive notifications for likes, comments, and friend requests.


Responsive Design
Mobile-friendly interface for seamless use across devices.


Technologies Used
The project leverages a modern tech stack to ensure scalability and performance.



Category
Technologies



Frontend
React.js, TypeScript, Tailwind CSS, Redux Toolkit


Backend
Node.js, Express.js


Database
MongoDB (or specify your database if different)


Authentication
JSON Web Tokens (JWT)


Deployment
Vercel


Others
Axios (API calls), Socket.io (real-time features), Cloudinary (media storage)

Usage

Register/Login: Create a new account or log in with existing credentials.
Create a Post: Share text, images, or videos from the homepage.
Interact: Like or comment on posts, and send friend requests to connect with others.
Explore Profiles: View and edit your profile or visit others' profiles.
Notifications: Stay updated with real-time notifications for interactions.

Folder Structure
Below is the high-level folder structure of the project:
TSocial/
├── backend/                    # Backend source code
│   ├── config/                 # Configuration files (e.g., database)
│   ├── controllers/            # Request handlers for routes
│   ├── models/                 # Database schemas (e.g., User, Post)
│   ├── routes/                 # API route definitions
│   ├── middleware/             # Custom middleware (e.g., authentication)
│   └── server.js               # Entry point for backend
├── frontend/                   # Frontend source code
│   ├── public/                 # Static assets
│   ├── src/                    # React source code
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page components (e.g., Home, Profile)
│   │   ├── redux/              # Redux store and slices
│   │   ├── assets/             # Images, styles, etc.
│   │   └── App.tsx             # Main React app component
├── .gitignore                  # Git ignore file
├── README.md                   # Project documentation
└── package.json                # Project metadata and scripts

Contributing
Contributions are welcome! To contribute to T-Social:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a pull request with a detailed description of your changes.

Please ensure your code follows the project's coding standards and includes appropriate tests.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, reach out to:

GitHub: Trucdeeptry
Email: (Add your contact email if applicable)
Live Demo: T-Social

Thank you for exploring T-Social! 🚀
