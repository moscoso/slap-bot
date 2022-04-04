# slap-bot for the crew
A slack bot for The Crew. Fun little learning project for Node with Typescript
# Getting started

1. Clone the repo from https://github.com/moscoso/slap-bot
2. Run `npm install` to install [NPM](httpshttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNpm_%28software%29) node packages
3. Run `npm run .env` to create a .env file to store your environment variables
4. Get the 3 secrets and tokens we need in dev: 
		-`SLACK_APP_TOKEN`: https://api.slack.com/apps/A039NA993KQ/general This token is under the 'App-Level Token' section 
        -`SLACK_BOT_TOKEN`: https://api.slack.com/apps/A039NA993KQ/oauth  This token is under  the 'OAuth Tokens for Your Workspace' section and it should begin wit 'xoxb-' 
        -`SLACK_SIGNING_SECRET`: https://api.slack.com/apps/A039NA993KQ/general This  secret is under the App Credentials section
5. Run `npm run develop` to start the bot and work on it. [Nodemon](https://www.npmjs.com/package/nodemon)  will automagically watch your files for changes, then re-compile and restart the bot for you.

# Project Structure

###### app.ts this is the entry point of our server
## src /
This is where the source code for the project lives
### block/
this folder houses the templates for sending special messages (usually text with images) in Slack using [Slack's block kit](https://api.slack.com/block-kit)
### controller/
controllers with functions for the slack component of our bot to handle certain slack events (like action, command)
### server/
the Bot is a server that lives in BotServer composed of two components: an Http component and a Slack component
### model/
representations of data by our server
### routes/
route controllers for the http component of our bot to handle incoming http requests
### service/
services provide data to our bot from fetching data from external APIs

##### dist/ 
shortform dist stands for distributable and refers to the javascript files of our bot. remember, typescript is a superset of javascript. typescript gets compiled into javascript

##### node_modules/ 
node_modules are packages, aka libraries of code, aka tools, written by others that we can download and import into our code using the [node package manger](httpshttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNpm_%28software%29)

### Helper / Configuration files
The rest of these files are mainly for configuration. You don't really have to worry about them often but I described them for you below: 

###### .editorconfig 
a file to help standardize configuration no matter which text editor you use (most of us use [VS CODE](https://code.visualstudio.com/))

###### .env
These are the environment variables that our bot will use. It is common practice to use environment variables to store secrets and tokens that you do not want to publish publicly for obvious security reasons

###### .eslinrc.json
this is the configuration for which lint rules this project will follow. instead of errors that break your code, you can think of lint as warnings that your code is valid but dirty and unpleasant to read 

###### .gitignore
this file tells git which files and folders it should not publish into the repository

###### .mocharc.json
this is a file that configures the test runner. ask me more about testing when you are ready !

###### nodemon.json
this is a file that configures [Nodemon](https://www.npmjs.com/package/nodemon) a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected

###### package.json
this tracks which packages we are using from npm listed under "dependencies" or "devDependencies"

###### package-lock.json
something node automatically generates and you don't need to worry about

###### .template.env
A file that acts as a template for which environment variables this project expects to use

###### tsconfig.json
A file that configures how typescript will compile into javascript.
