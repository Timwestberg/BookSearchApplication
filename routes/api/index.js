const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/API", bookRoutes);

module.exports = router;