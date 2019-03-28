This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run the app
`cd` into the expressServer directory and run: `npm start`  
Make sure the express server is using port 3000 for localhost.  
If it is not, read section: "Express Server not on port 3000 for localhost"

Once that is done,   
Open another terminal and `cd` into the project directory (activepdf-coding-exercise/) and run : `npm start`  
If the express server or another process using port 3000 for localhost, it will prompt:  
##### Something is already running on port 3000.
##### Would you like to run the app on another port instead? (Y/n)
Reply with `Y`  
And the app should open for you on [http://localhost:3001](http://localhost:3001)


### Express Server not on port 3000 for localhost
If your express server is not running on port 3000 for localhost you will need to change:  
The port number to the port your express server is running on in the 2 localhost URLs in `/src/components/uploader/Uploader.js`  
They should be located on lines: `18` and `21`  
For example, if my express server is running on port 3001 I would change the lines to:  
`server="http://localhost:3001/upload"`  
`fetch("http://localhost:3001/IMG.pdf")`  
