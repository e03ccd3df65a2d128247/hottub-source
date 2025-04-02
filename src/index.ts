import express, { Request, Response } from "express";
import { status } from "./routes/api/status";
import { getVideos } from "./routes/api/videos";

const app = express();

app.use(
  express.json({ type: ["application/json", "text/plain", "application/x-www-form-urlencoded"] })
);

// Root route
app.get("/api", (req: Request, res: Response) => {
  res.send("Yahaha! You found me!");
});

// Status route
app.post("/api/status", status);

// Popular videos route
app.post("/api/videos", getVideos);

// Start the server
app.listen(3000, '0.0.0.0', () => console.log("Server running on http://0.0.0.0:3000"))
