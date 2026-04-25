const express = require("express");
const multer = require("multer");
const app = express();
const cors = require('cors')
app.use(cors());



// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype.startsWith("image/")) {
        cb(null, true); // ✅ accept file
    } else {
        cb(new Error("Only images are allowed"), false); // ❌ reject
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter,
});

// Route

app.get("/", (req, res) => {
    res.send("Hello API is working");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log(req.body);
    res.json({
        message: "File uploaded",
        filePath: req.file.path,
    });
});
// -------------------------------------------------------------------------------------
// global error handler in Express if file size error occurs in multer
app.use((err, req, res, next) => {
    if (err.code === "LIMIT_FILE_SIZE") {
        return res.json({
            message: "File size must be less than 5MB",
        });
    }

    res.status(500).json({ message: err.message });
});

// --------------------------------------------------------------------------------
// Activating server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});