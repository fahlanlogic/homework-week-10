const router = require("express").Router();
const express = require("express");
const path = require("path");
const moviesRouter = require("./movies");
const usersRouter = require("./users");

router.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));
router.use("/api/movies", moviesRouter);
router.use("/api/users", usersRouter);

module.exports = router;
