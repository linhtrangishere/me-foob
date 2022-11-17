import config from '~/config/';

//Layout

import Home from '~/pages/Home';
import RegisterPage from '~/pages/Register';
import RestaurantPage from '~/pages/Restaurant';
import RestaurantsPage from '~/pages/Restaurants';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.restaurants, components: RestaurantsPage },
    { path: config.routes.restaurant, components: RestaurantPage },
    { path: config.routes.register, components: RegisterPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
