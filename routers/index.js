const router = require("express").Router();
const MovieController = require("../controllers/movie.controller");

router.get("/api/movies", MovieController.findAll);
router.get("/api/movies/:id", MovieController.findOne);

module.exports = router;
