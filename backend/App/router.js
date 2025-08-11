// importing the necessary package and files
const express = require("express");
// admin files routes
const adminCategoryRoutes = require("./Routes/admin/adminCategoryRoutes");
const adminColorRoutes = require("./Routes/admin/adminColorRoutes");
const adminOrderRoutes = require("./Routes/admin/adminOrderRoutes");
const adminProductRoutes = require("./Routes/admin/adminProductRoutes");
const adminSliderRoutes = require("./Routes/admin/adminSliderRoutes");
const adminUserRoutes = require("./Routes/admin/adminUserRoutes");
// web files routes
const webCategoryRoutes = require("./Routes/web/webCategoryRoutes");
const webOrderRoutes = require("./Routes/web/webOrderRoutes");
const webProductRoutes = require("./Routes/web/webProductRoutes");
const webSliderRoutes = require("./Routes/web/webSliderRoutes");
const webUserRoutes = require("./Routes/web/webUserRoutes");
const webColorRoutes = require("./Routes/web/webColorRoutes");
const webCartRoutes = require("./Routes/web/webCartRoutes");

// creating a router variable
const router = express.Router();

// default route
router.get("/", (request, response) => {
    response.send("! Server is Working !");
})

// admin routes
router.use("/admin/category", adminCategoryRoutes);
router.use("/admin/color", adminColorRoutes);
router.use("/admin/order", adminOrderRoutes);
router.use("/admin/product", adminProductRoutes);
router.use("/admin/slider", adminSliderRoutes);
router.use("/admin/user", adminUserRoutes);

// web routes
router.use("/web/cart", webCartRoutes)
router.use("/web/category", webCategoryRoutes)
router.use("/web/color", webColorRoutes)
router.use("/web/order", webOrderRoutes)
router.use("/web/product", webProductRoutes)
router.use("/web/slider", webSliderRoutes)
router.use("/web/user", webUserRoutes)

// exporting router variable
module.exports = router