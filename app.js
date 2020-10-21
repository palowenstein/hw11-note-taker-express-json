const express = require("express"); // Loads the Express module
const path = require("path"); // Loads the Path module, gives the app directory/file access.
const fs = require("fs"); // Loads the fs module, allows the app to interact (read/write) with the file system.
const app = express();  // Creates new "app" express application, server initialization.
const PORT = process.env.PORT || 4000;  // Sets up listening port for app to execute on.

// Built-in Middleware setup: allows Express app to track files, handle data parsing.
app.use(express.urlencoded({ extended: true }));  // Parses incoming requests with urlencoded payloads, qs library. Allows rich objects, arrays encoding in URL-encoded format, similar to JSON.
app.use(express.json());  // Parses incoming requests with JSON payloads. Only parses JSON/requests where Content-Type header === type option.
app.use(express.static(path.join(__dirname, 'public')));  // Serves static files, __dirname = absolute path of the directory containing the currently executing file.

// API Routes (__dirname for index, notes, db.json)
app.get('/', (req, res) => {  res.sendFile(path.join(__dirname,'public/index.html')); }); // New Route following the root "/" path, sends to splash screen (index.html).
app.get('/notes', (req, res) => { res.sendFile(path.join(__dirname,'public/notes.html')); }); // New Route: "notes" path, sends to note.html.
app.get('/api/notes', (req, res) => { res.sendFile(path.join(__dirname,'db/db.json'));  }); // Reads db.json, displays all stored notes.
app.get("/api/notes/:note", function(req, res) {  const displayNote = req.params.note; res.json(displayNote)  }); // Displays one single note out of the JSON object.

// POST [/api/notes]
app.post("/api/notes", (req, res) => {
  const newNote = req.body; // Establishes new note constant, req.body = hosts user JSON created note content, body parsing middleware.
  newNote.id = Date.now();    // Attaches a unique identifier to newNote with Date.now()
  let noteContent = fs.readFileSync('./db/db.json');   // Sends noteContent to the db.json file. fs.readFileSync: reads/write db.json, returns its content.
  let noteParser = JSON.parse(noteContent);     // noteContent is being JSON parsed and transferred to noteParser.
  noteParser.push(req.body);     // newNote (via req.body) pushed to newParser array.
  fs.writeFileSync('./db/db.json',JSON.stringify(noteParser), (err, data) =>  { if (err) throw err; res.json(noteParser) });   // Writes to db.json, stringifies noteParser array.
  res.sendFile(path.join(__dirname,'public/notes.html'));     // forwards newNote content to notes.html for on-screen display.
});

// DELETE [/api/notes/:id]
app.delete("/api/notes/:id", (req, res) => {
  let noteContent = fs.readFileSync('./db/db.json');  // Syncs with db.json for content retrieval.
  let noteParser = JSON.parse(noteContent);// noteContent is being JSON parsed and transferred to noteParser.
  const notesSaved = noteParser.filter(n => parseInt(n.id) !== parseInt(req.params.id)); // noteParser array is being parsedInt, returns start position, assigned to notesSaved.
  const notesIndex = noteParser.indexOf(notesSaved);    // notesSaved is being indexedOf so that ID position in the array is being returned, then transferred to notesIndex.
  noteParser.splice(notesIndex);    // notesIndex array is being updated via the splice command, an updated noteParser array is being returned (with the deleted element now gone).
  fs.writeFileSync(__dirname + "/db/db.json", JSON.stringify(noteParser), (err, data) => { if (err) throw err; res.json(noteParser) }); // noteParser is stringified and written to db.json.
  res.sendFile(path.join(__dirname,'public/notes.html')); // (J)
});

// HTML Routes
app.get("/notes", (req, res) => res.sendFile(__dirname + "/public/notes.html"));  // [GET /notes] - Returns the notes.html file.
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html")); // [GET *] -  Returns the index.html file. 

// Runs server application, port is open for communication.
app.listen(PORT, function() { console.log("App listening on PORT " + PORT); });