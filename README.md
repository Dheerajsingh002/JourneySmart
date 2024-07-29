# JourneySmart
<p>JourneySmart is a full-stack web application designed to help users plan their trips seamlessly. The application uses React with Vite for the frontend, Firebase for data storage, and Gemini AI for generating trip plans. The design is crafted using ShadCN components.</p>

<h1>Table Of Contents</h1>
<ul>
  <li>Features</li>
  <li>Installation</li>
  <li>Usage</li>
  <li>Project Structure</li>
  <li>Contributing</li>
</ul>

<h1>Features</h1>
<ul>
  <li><span style="font-Weight:bold">JourneySmart:</span> Generate personalized trip plans using Gemini AI.</li>
  <li>User Authentication: Secure user authentication with Firebase.</li>
  <li>Responsive Design: Mobile-friendly design using ShadCN components.</li>
  <li>Real-time Data Storage: Store and retrieve trip data in real-time with Firebase.</li>
  <li>Google Places Integration: Use Google Places API for location data.</li>
</ul>

<h1>Installation</h1>
<h2>Prerequisites</h2>
<ul>
  <li>Node.js</li>
  <li>npm (or yarn)</li>
  <li>Firebase project setup</li>
  <li>Gemini AI key</li>
  <li>Google Places API key</li>
</ul>
<h1>Clone the Repository</h1>

   ```shell
   git clone https://github.com/Dheerajsingh002/DecentraliZedVotingSystemUsingBlockChain.git
   cd dVoting
   ```

<h1>Install Dependencies</h1>

   ```shell
   git clone https://github.com/Dheerajsingh002/DecentraliZedVotingSystemUsingBlockChain.git
   cd dVoting
   ```

<h1>Firebase Setup</h1>
<ol>
  <li>Create a Firebase project at Firebase Console.</li>
  <li>Enable Firestore and Authentication.</li>
  <li>Add your Firebase configuration to the project.</li>
</ol>
<p>Create a `.env` file in the root directory and add your Firebase config:</p>

 ```shell
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_GOOGLE_AUTH_CLIENT_ID=Your-auth-client
   VITE_GOOGLE_PLACE_API_KEY=Your-Api-key
   VITE_GOOGLE_GEMINI_AI_KEY=Your-Ai-key
   ```

<h1>Usage</h1>
<h2>Running the Application</h2>

  ```shell
    npm run dev
   ```
<p>Open your browser and navigate to `http://localhost:5173/` to see the application in action.</p>

<h1>Project Strucrure</h1>

 ```shell
trip-traveller/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── create-trip/
│   ├── lib/
│   ├── my-trips/
│   ├── service/
│   ├── view-trip/
│   ├── App.css
│   ├── App.jsx
|   ├── index.css
|   └──main.jsx
├── .env.local
├── .eslintrc.cjs
├── .gitignore
├── components.json
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js

   ```

<h1>Contributing</h1>
<p>Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create your feature branch (git checkout -b feature/AmazingFeature).</li>
  <li>Commit your changes (git commit -m 'Add some AmazingFeature').</li>
  <li>Push to the branch (git push origin feature/AmazingFeature).</li>
  <li>Open a pull request.</li>
  
  
</ol>

<h1>React + Vite</h1>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
