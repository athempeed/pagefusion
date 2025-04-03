import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTemplate } from "../../store/slices/selectedTemplateSlice";
import { TemplateItem } from "../checkout/checkout";
import './cards.scss';


const Cards = () => {
    const dispatch = useAppDispatch();
    const addSelectedTemplate = (template: TemplateItem) => {
        dispatch(addTemplate(template));
    }
    return (
        <div className="card-container">
            <div className="custom-header">
                <p>Select components which you would like to have on the page and click on Cart to finish.</p>
            </div>

            <div className="card-library">
                <div className="card-template">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/cardlayout_with_image_heading"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>card layout with heading on top</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'c1', iframeUrl: 'https://cms-themes.pages.dev/cardlayout_with_image_heading', title: 'card layout' }) }}>Select</button>
                        </div>
                    </div>
                </div>
                <div className="card-template">
                    <div className="preview-frame">
                        <iframe src="https://cms-themes.pages.dev/cardlayout"></iframe>
                    </div>
                    <div className="template-info">
                        <h4>card layout with title and description</h4>
                        <div className="actions">
                            <button className="select-btn" onClick={() => { addSelectedTemplate({ id: 'c2', iframeUrl: 'https://cms-themes.pages.dev/cardlayout', title: 'card layout with title and description' }) }}>Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cards;
