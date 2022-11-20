import config from '~/config/';
import CartPage from '~/pages/Cart';

//Layout

import Home from '~/pages/Home';
import RegisterPage from '~/pages/Register';
import RestaurantPage from '~/pages/Restaurant';
import RestaurantsPage from '~/pages/Restaurants';
import CheckOutPage from '~/pages/CheckOut';
import ContractPage from '~/pages/Contract';
import BranchPage from '~/pages/Branch';
import ManageCartPage from '~/pages/ManageCart';
import FollowOrderPage from '~/pages/FollowOrder';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.restaurants, components: RestaurantsPage },
    { path: config.routes.restaurant, components: RestaurantPage },
    { path: config.routes.register, components: RegisterPage },
    { path: config.routes.cart, components: CartPage },
    { path: config.routes.checkout, components: CheckOutPage },
    { path: config.routes.contract, components: ContractPage },
    { path: config.routes.branch, components: BranchPage },
    { path: config.routes.manageCart, components: ManageCartPage },
    { path: config.routes.followOrder, components: FollowOrderPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
