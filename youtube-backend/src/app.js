import express from "express";             // Express framework import
import cors from "cors";                   // CORS middleware import
import cookieParser from "cookie-parser";  // Cookie parser middleware import

const app = express();                     // Express app create

// Enable CORS for specific origin with credentials
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,      // Allowed frontend origin from .env
    credentials: true,                    // Allow cookies/auth headers
  })
);
// Middleware to parse incoming JSON data from request body
// Limit set to 16kb to prevent large payloads (for security/performance)
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded form data (like from HTML forms)
// 'extended: true' allows nested objects, and limit is set to 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files (images, CSS, JS) from the 'public' directory
// Accessible directly via URL, e.g., /logo.png → public/logo.png
app.use(express.static("public"));

// Middleware to parse cookies sent by the client (in request headers)
// Makes cookies easily accessible via req.cookies in route handlers
app.use(cookieParser());


export { app };
