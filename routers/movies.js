const router = require("express").Router();
const MovieController = require("../controllers/movie.controller");
const uploadHandler = require("../middlewares/upload.handler");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.post("/", MovieController.create);
router.post("/uploads", uploadHandler, MovieController.upload);
router.put("/:id", MovieController.update);
router.delete("/:id", MovieController.destroy);

module.exports = router;
