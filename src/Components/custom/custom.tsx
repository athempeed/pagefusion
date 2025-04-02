import React from "react";
import { useGetHtmlContentQuery } from "../../store/slices/cloudFlarePageSlice";
import { useAppSelector } from "../../store/hooks";
import { sidebarState } from "../../store/slices/sidebar";

import './custom.scss';


const Custom = () => {

    return (
        <div className="customize-container">
            <div className="custom-header">
                <p>Select components which you would like to have on the page and click on finish.</p>
            </div>


            <h3 className="component-title">Carousels</h3>
            <div className="component-grid">
                <div className="library-card">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/300/180?random=1" alt="Thumbnail" />
                    </div>
                    <h4>Carousel A</h4>
                    <div className="component-action">
                        <button className="select-btn">Select</button>
                        <button className="select-btn">Preview</button>
                    </div>
                </div>

                <div className="library-card selected">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/300/180?random=2" alt="Thumbnail" />
                    </div>
                    <h4>Card Layout B</h4>
                    <div className="component-action">
                        <button className="select-btn">Select</button>
                        <button className="select-btn">Preview</button>
                    </div>
                </div>
            </div>

            <h3 className="component-title">Card Layouts</h3>
            <div className="component-grid">
                <div className="library-card">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/300/180?random=3" alt="Thumbnail" />
                    </div>
                    <h4>Carousel A</h4>
                    <div className="component-action">
                        <button className="select-btn">Select</button>
                        <button className="select-btn">Preview</button>
                    </div>
                </div>

                <div className="library-card selected">
                    <div className="thumbnail">
                        <img src="https://picsum.photos/300/180?random=4" alt="Thumbnail" />
                    </div>
                    <h4>Card Layout B</h4>
                    <div className="component-action">
                        <button className="select-btn">Select</button>
                        <button className="select-btn">Preview</button>
                    </div>
                </div>
            </div>

            <div className="footer">
                <button className="finish-btn">Finish</button>
            </div>
        </div>
    );
}


export default Custom;
