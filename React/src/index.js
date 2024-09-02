// here we use react dom to render the components into DOM
import React from "react";
import { createRoot } from 'react-dom/client'
import ShoppingCart from './ShoppingCart'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
const rootElement =document.querySelector("#root");
const root = createRoot(rootElement);
root.render(<ShoppingCart />);