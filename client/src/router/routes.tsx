import AboutPage from "@/components/about/about-page";
import App from "@/components/app/App";
import CatalogPage from "@/components/catalog/catalog-page";
import ContactPage from "@/components/contact/contact-page";
import HomePage from "@/components/home/home-page";
import ProductDetails from "@/components/product/product-details";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/catalog",
                element: <CatalogPage />,
            },
            {
                path: "/catalog/:productId",
                element: <ProductDetails />,
            },
        ],
    },
]);
