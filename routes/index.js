const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// If we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource, another RESTful API practice.
router.use((req, res) => {
  res.status(404).send("404 Error!");
});

module.exports = router;
