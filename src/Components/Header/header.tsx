import React from "react";

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleSidebar } from "../../store/slices/sidebar";
import { selectedTemplatesState } from "../../store/slices/selectedTemplateSlice";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header: React.FC = () => {
    // State to track sidebar visibility
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    let count = useAppSelector(selectedTemplatesState.selected).length;
    return (
        <div className="header">
            <div className="logo-container">
                <a href="/">
                    <img className="logo" src="/assets/images/logo.png" alt="logo" />
                </a>
                <div className="nav-toggle" onClick={() => dispatch(toggleSidebar())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="29px" height="29px"><path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z" /></svg>
                </div>
            </div>
            <div className="right-container">
                <div className="cart-container" onClick={() => { navigate('/checkout') }}>
                    <div className="count">{count}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Header;