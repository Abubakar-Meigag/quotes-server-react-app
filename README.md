# Quotes server on React App

I use my glitch serever to fetch qoutes data on this url "https://abubakar-meigag-quote-server.glitch.me/quotes"

Todo this challenge 

# Challenge: Advanced: Add a React app as a front-end

Note: only do this if you have done all other Node homework this week - that is the priority.

    Make a very simple React app called quotes-react-app
    Have it fetch a random quote from your server on glitch. You'll have to enable CORS on the express app. See below.
    (Bonus: Allow the user to get a new random quote from the server, by clicking a button or clicking the quote.)
    Host your react app on netlify
    Post the URL to your hosted React app on Slack, and in your google classroom submission (along with your glitch server url)

Enabling CORS on the Express app

You'll have to install and enable CORS in order to allow your JSON to be loaded from a different server (glitch.me) than your React app was initially loaded (probably netlify.com).

in package.json add a dependency for "cors": "^2.8.5"

Then in your server.js add...

var cors = require('cors')

and

app.use(cors())

Read more or CORS 
https://codeyourfuture.github.io/syllabus-master/others/cors.html
and in CORS in Express.
https://expressjs.com/en/resources/middleware/cors.html

