import React from "react";
import { useGetHtmlContentQuery } from "../../store/slices/cloudFlarePageSlice";
import { useAppSelector } from "../../store/hooks";
import { sidebarState } from "../../store/slices/sidebar";
import Custom from '../custom/custom';
import './content.scss';
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";


const fixRelativeAssets = (html: string, url: string) => {
    if (html) {
        return html.replace(/(href|src)="\.\/(.*?)"/g, `$1="${url}/$2"`);
    }
    return "";

};
const baseUrl = process.env.REACT_APP_CLOUDFLARE_PAGE_URL || "";

const renderContent = (activeTab: string, isLoading: boolean, error: FetchBaseQueryError | SerializedError | undefined, htmlContent: string) => {

    if (!activeTab) {
        return (
            <>
                <h1>Welcome</h1>
                <p>This is the default layout before a selection is made.</p>
            </>
        );
    }
    console.log('ca');
    if (activeTab == 'page1') {
        console.log('ca1');
        if (isLoading) return <div>Loading...</div>;
        if (error || !htmlContent) return <div>Error loading content</div>;
        const fixedHtml = fixRelativeAssets(htmlContent, baseUrl);
        console.log(fixedHtml);
        return (
            <iframe
                title="Design Preview"
                className="content-frame"
                srcDoc={fixedHtml}
                style={{ width: "100%", height: "100%", border: "none" }}
                sandbox="allow-scripts allow-same-origin"
            />
        );
    }
    else if (activeTab == 'page2') {
        console.log('ca2');
        return (
            <Custom />
        )
    }

};

const Content = () => {
    const pagePath = useAppSelector(sidebarState.pagePath);
    const activeNav = useAppSelector(sidebarState.activeItem);
    const { data: htmlContent, isLoading, error } = useGetHtmlContentQuery(pagePath, {
        skip: !pagePath, // Only fetch when path is available
    });

    return (
        <div className="content" id="content">
            {renderContent(activeNav, isLoading, error, htmlContent)}
        </div>
    );
}






export default Content;
