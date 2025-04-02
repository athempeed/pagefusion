import React from "react";
import Header from './Components/Header/header';
import Sidebar from './Components/SideBar/sidebar';
import Content from './Components/Content/content';
import './app.scss';
const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <div className="layout">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
};

export default App;
