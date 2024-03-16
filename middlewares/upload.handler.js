const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "../uploads"));
	},
	filename: (req, file, cb) => {
		const name =
			file.fieldname +
			"-" +
			Date.now() +
			path.extname(file.originalname);
		cb(null, name);
	},
});

const uploadHandler = multer({ storage: diskStorage }).single("image");

module.exports = uploadHandler;
