# --- The Code --- #

* Imports:

    The http module is used to create the server.
    The fs module is used for file system operations.


* Server Creation:

    The server listens for incoming requests and handles different routes using a switch statement based on the requested URL.


* Route Handling:

    / responds with "This is the Home Page".
    /about responds with "This is the About Page".
    /contact responds with "This is the Contact Page".
    /file-write creates a file named demo.txt with the content "Server file Creation " and responds accordingly based on success or error.
    Any other route responds with a 404 error and "Page not found".


* Server Listening:

    The server starts listening on port 3001 and logs a message to the console indicating that it is running.