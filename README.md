## #hw11-note-taker-express-json 
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Note taker application that can be used to write, save, and delete notes. Employs an express backend, saves and retrieves data from a JSON file.</h3>
<p>Github Repository Page: https://github.com/palowenstein/hw11-note-taker-express-json</p>
<p>Heroku Deployment Page: https://hw11-note-taker-express-json.herokuapp.com/</p>

# Table of Contents
  * [GIF](#Gif)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Contact](#Contact)

## GIF
![Express Note Taker Application Demo (GIF)](./demo_assets/ucla-hw11-express-note-taker-application-demo.gif "Express Note Taker Application Demo (GIF)")

## Overview
<ul>
<li>The Express Note taker application allows for the creation, saving and deletion of notes.</li>
<li>Based on an Express backend running in Node.js, the application ensures the long term storage of saved notes via a json file (acting de facto as a database).
<li>The .json file, storing all the notes, is accessed via the express path module and is overwritten via the express fs module.</li>
<li>HTML routes for information on-screen display:
    <ul>
    <li>GET /notes - Returns the notes.html file.</li>
    <li>GET * - Returns the index.html file.</li>
    </ul>
</li>
<li>API routes for information retrieval, storage, modification:
    <ul>
    <li>GET /api/notes - Reads the db.json file and return all saved notes as JSON.</li>
    <li>POST /api/notes - Receives a new note to save on the request body, add it to the db.json file, and then return the new note to the client.</li>
    <li>DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete.</li>
    </ul>
</li>
<li>As a node.js application, the express note taker program must be ignited in terminal (node app.js command) before being executed in the browser (http://localhost:4000/).</li>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, .DS_Store.</li>
<li>A Procfile is present at the root level to indicate to Heroku how to start the application.</li>
<li>A manifest.webmanifest file is also present as the application is executed in Heroku as a PWA (Progressive Web Application).</li>
<li>The included package.json includes an install link to all the required dependencies (Express) needed for the program to run. All the user needs to do is run 'npm install' in Terminal while in the root folder (see Instructions).</li>
</ul>

## Instructions
<ul>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd hw11-note-taker-express-json</li>
<li>Run the 'npm install' command to install the express module from the package.json (screenshot #1).</li>
<li>Run the 'node app.js' command to start the application in Terminal (GIF/MP4).</li>
<li>Open a Browser window at the following location: http://localhost:4000/</li>
<li>Click on "Get Started".</li>
<li>In the left column, five (5) Notes are already present, you can keep or delete those.</li>
<li>In the right column (main section), type a note title (header) and, in the section below, type the note content.</li>
  <ul>
      <li>Click on the Disk Drive icon to save the note.</li>
      <li>Click on the pencil to discard the current note and start a new one.</li>
  </ul>
<li>To retrieve a specific note, click on its title in the left column.</li>
<li>To delete any of the previously stored notes, click on the trash icon next to its title in the left column.<li>
<li>As the notes are stored in an independent json file, you can safely quit your navigator and retrieve your notes at a later time.</li>
</ul>

<p><i>Refer to app.js (javascript file) for code dissection.</i></p>

## Screenshots
![Express Note Taker Application (Screenshot #1: npm install/package.json)](./demo_assets/ucla-hw11-express-note-taker-application-npm-install-package-json.png?raw=true "Express Note Taker Application (Screenshot #1: npm install/package.json)")
<h6>Express Note Taker Application (Screenshot #1: npm install/package.json)</h6>
<br />

![Express Note Taker Application (Screenshot #2: Application start in Terminal)](./demo_assets/ucla-hw11-express-note-taker-application-terminal-start.png?raw=true "Express Note Taker Application (Screenshot #2: Application start in Terminal)")
<h6>Express Note Taker Application (Screenshot #2: Application start in Terminal)</h6>
<br />

![Express Note Taker Application (Screenshot #3: Main HTML Notes Page)](./demo_assets/ucla-hw11-express-note-taker-application-main-html-notes-page.png?raw=true "Express Note Taker Application (Screenshot #3: Main HTML Notes Page)")
<h6>Express Note Taker Application (Screenshot #3: Main HTML Notes Page)</h6>
<br />

## Video
![Express Note Taker Application Demo (MP4)](./demo_assets/ucla-hw11-express-note-taker-application-demo.mp4 "Express Note Taker Application Demo (MP4)")
<h6>Express Note Taker Application Demo (MP4)</h6>
<br />

## References
<ul>
<li>Node.js</li>
<li>Package.JSON / NPM for installing dependencies</li>
<li>Express, Express Body Parser</li>
<li>fs_module, path_module</li>
<li>Javascript</li>
<li>API/HTML Routes</li>
<li>GET/POST/DELETE Requests</li>
<li>JSON Property/Value Pair file format for notes storage (db.json)</li>
<li>Environmental / Port Listener for App execution in Browser</li>
<li>Boostrap CSS, Font Awesome</li>
</ul>

 ## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2020] Pierre André Lowenstein
</p>

 ## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

 ## Contact
<p>
<a href="http://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:soundtrackspecialist@gmail.com" title="Courriel">Send me a 'courriel'</a>
</p>