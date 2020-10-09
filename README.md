# hw11-note-taker-express-json
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

Note taker application that can be used to write, save, and delete notes. Employs an express backend, saves and retrieves data from a JSON file.
Express backend: save and retrieve note data from a JSON file. Connect to already existing frontend.

* HTML routes TD:
  * GET `/notes` - Should return the `notes.html` file.
  * GET `*` - Should return the `index.html` file
* db.json file on the backend that will be used to store and retrieve notes using the `fs` module.

* API routes TD:
  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

A) Be able to write and save notes
B) Be able to delete notes I've written before
C) I can organize my thoughts and keep track of tasks I need to complete

## Business Context
To keep track of a lot of information, it's easy to forget or be unable to recall something important.
Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria
A-create and save notes.
B-view previously saved notes.
C-allow users to delete previously saved notes.

Required:
* URL of the deployed application
* URL of the GitHub repository