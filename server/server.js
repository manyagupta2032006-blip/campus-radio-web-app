
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Home route: check whether the backend is running
app.get("/", (req, res) => {
  res.json({
    message: "PCTE Campus Radio backend is running!",
  });
});

// 2. Test the MySQL database connection
app.get("/api/db-test", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT DATABASE() AS databaseName"
    );

    res.json({
      message: "MySQL connected successfully!",
      database: rows[0].databaseName,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);

    res.status(500).json({
      message: "Database connection failed.",
      error: error.message,
    });
  }
});

// 3. Fetch all radio shows from MySQL
app.get("/api/shows", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        title,
        host,
        category,
        show_time AS time,
        badge,
        is_live AS isLive,
        rating,
        episodes_count AS episodesCount,
        description,
        image,
        host_avatar AS hostAvatar,
        image_bg AS imageBg,
        accent_color AS accentColor,
        host_bio AS hostBio
      FROM shows
      ORDER BY title ASC
    `);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching shows:", error.message);

    res.status(500).json({
      message: "Failed to fetch radio shows from the database.",
    });
  }
});
// 4. Fetch the playlist for a specific radio show
app.get("/api/shows/:id/tracks", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `SELECT
        id,
        show_id AS showId,
        title,
        artist,
        audio_url AS audioUrl,
        track_order AS trackOrder
      FROM show_tracks
      WHERE show_id = ?
      ORDER BY track_order ASC`,
      [id]
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching playlist:", error.message);

    res.status(500).json({
      message: "Failed to fetch this show's playlist.",
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `PCTE Campus Radio backend running at http://localhost:${PORT}`
  );
});
