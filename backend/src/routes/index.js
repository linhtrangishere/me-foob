const homeRouter = require("./Home");
const restaurantsRouter = require("./Restaurants");
const restaurantRouter = require("./Restaurant");
const registerRouter = require("./Register");
const cartRouter = require("./Cart");
const checkoutRouter = require("./Checkout");
const contactRouter = require("./Contact");
const branchRouter = require("./Branch");
const manageCartRouter = require("./ManageCart");
const manageDriverRouter = require("./ManageDriver");
const followOrderRouter = require("./FollowOrder");
const earningTrackingRouter = require("./EarningTracking");
const manageCoopRouter = require("./ManageCoop");

function route(app) {
	app.use("/register", registerRouter);
	app.use("/cart", cartRouter);
	app.use("/checkout", checkoutRouter);
	app.use("/contact", contactRouter);
	app.use("/branch", branchRouter);
	app.use("/manageCart", manageCartRouter);
	app.use("/manageDriver", manageDriverRouter);
	app.use("/followOrder", followOrderRouter);
	app.use("/earningTracking", earningTrackingRouter);
	app.use("/manageCoop", manageCoopRouter);
	app.use("/restaurant", restaurantRouter);
	app.use("/restaurants", restaurantsRouter);
	app.use("/home", homeRouter);
}

module.exports = route;
