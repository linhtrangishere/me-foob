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
const loginRouter = require("./Login");

function route(app) {
	app.use("/register", registerRouter);
	app.use("/login", loginRouter);
	app.use("/cart", cartRouter);
	app.use("/checkout", checkoutRouter);
	app.use("/contact", contactRouter);
	app.use("/branch", branchRouter);
	app.use("/manage-cart", manageCartRouter);
	app.use("/manage-driver", manageDriverRouter);
	app.use("/follow-order", followOrderRouter);
	app.use("/earning-tracking", earningTrackingRouter);
	app.use("/manage-coop", manageCoopRouter);
	app.use("/restaurant", restaurantRouter);
	app.use("/restaurants", restaurantsRouter);
	app.use("/home", homeRouter);
}

module.exports = route;
