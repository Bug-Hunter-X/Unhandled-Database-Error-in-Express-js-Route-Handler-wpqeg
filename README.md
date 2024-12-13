# Unhandled Database Error in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: neglecting error handling in route handlers that interact with databases or external services.  The `bug.js` file shows a route that fetches user data but lacks proper error handling.  This can lead to application crashes or unexpected behavior if the database query fails.

The `bugSolution.js` file provides a corrected version with robust error handling, showing how to gracefully handle database errors and return appropriate responses to the client.