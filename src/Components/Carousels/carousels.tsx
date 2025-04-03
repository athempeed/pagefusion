import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTemplate } from "../../store/slices/selectedTemplateSlice";
import { TemplateItem } from "../checkout/checkout";
import './carousels.scss';


const Carousels = () => {
    const dispatch = useAppDispatch();
    const addSelectedTemplate = (template: TemplateItem) => {
        dispatch(addTemplate(template));
    }
    return (
        <div className="customize-container">
            <div className="custom-header">
                <p>Select components which you would like to have on the page and click on Cart to finish.</p>
            </div>

            <div className="template-library">
                <div className="template-card">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/carousel_main"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>carousel with bullet pagination</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'r1', iframeUrl: 'https://cms-themes.pages.dev/carousel_main', title: 'carousel with bullet pagination' }) }}>Select</button>
                        </div>
                    </div>
                </div>
                <div className="template-card">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/carousel_number"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>carousel with number pagination</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'r2', iframeUrl: 'https://cms-themes.pages.dev/carousel_number', title: 'carousel with number pagination' }) }}>Select</button>
                        </div>
                    </div>
                </div>
                <div className="template-card">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/carousel_progressbar"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>carousel with progressbar and arrow pagination</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'r3', iframeUrl: 'https://cms-themes.pages.dev/carousel_progressbar', title: 'carousel with progressbar and arrow pagination' }) }}>Select</button>
                        </div>
                    </div>
                </div>
                <div className="template-card">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/carousel_vertical"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>carousel with vertical pagination</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'r4', iframeUrl: 'https://cms-themes.pages.dev/carousel_vertical', title: 'carousel with vertical pagination' }) }}>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Carousels;
