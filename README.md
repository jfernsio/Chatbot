This project is a simple Express.js server integrated with Google Generative AI to process and respond to user queries. The server serves a static frontend (from the public directory) and provides a /get API endpoint to handle user inputs.

**Features**

**Static File Serving**: Serves static files like index.html from the public directory.


**Google Generative AI Integration**: Uses the Google Generative AI API for generating responses based on user queries.

**RESTful API**: Includes a POST endpoint /get to process user inputs.

**Setup**

**Step 1: Clone the Repository**

```
git clone https://github.com/jfernsio/ChatBot.git
cd your-repo
```
**Step 2: Install Dependencies**

```
npm install
```

**Step 3: Set Environment Variables**
Create a .env file in the project root and add your SECRET_KEY (Google API key):
```
SECRET_KEY=your-google-api-key
```

**Step 4: Run the Server Locally**
```
npm start
```
The server will start at http://localhost:3000.
