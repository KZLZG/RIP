import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./modules/consts";
import Basket from "./modules/Pages/Basket";
import Admin from "./modules/Pages/Admin"
import Shop from "./modules/Pages/Shop";
import Auth from "./modules/Pages/Auth";
import ProductPage from "./modules/Pages/ProductPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: <Admin/>
    }
]

export const publicRoutes = [
    {
        path: BASKET_ROUTE,
        Element: <Basket/>
    },
    {
        path: SHOP_ROUTE,
        Element: <Shop/>
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        Element: <ProductPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        Element: <Auth/>
    }
]