import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainScreen} from "./screens/glavnaya/Screen";
import {CatalogScreen} from "./screens/katalog_s/screen";
import {TemplateScreen} from "./screens/template/Screen";
import {DeliveryScreen} from "./screens/delivery/Screen";
import {AboutScreen} from "./screens/about_us/Screen";
import {AboutPartnersScreen} from "./screens/about_partners/Screen";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <MainScreen />,
    },
    {
        path: "/catalog",
        element: <CatalogScreen />
    },
    {
        path: "/template",
        element: <TemplateScreen />
    },
    {
        path: "/delivery",
        element: <DeliveryScreen />
    },
    {
        path: "/about_us",
        element: <AboutScreen />
    },
    {
        path: "/about_partner",
        element: <AboutPartnersScreen />
    }
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
