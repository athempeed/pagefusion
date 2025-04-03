import React from "react";
import { Route, Routes } from "react-router-dom";

import Carousels from '../carousels/carousels';
import './content.scss';
import Layout from "../Layout/layout";
import Dashboard from "../Dashboard/dashboard";
import Cards from "../Cards/cards";

import DragDropList from "../checkout/checkout";


const Content = () => {
    return (
        <div className="content" id="content">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/components/carousels" element={<Carousels />} />
                <Route path="/components/cards" element={<Cards />} />
                <Route path="/layouts/cwc" element={<Layout />} />
                <Route path="/checkout" element={<DragDropList />} />
                <Route path="*" element="/" />
            </Routes>
        </div>
    );
}






export default Content;
