import React from "react";
import { useGetHtmlContentQuery } from "../../store/slices/cloudFlarePageSlice";


import "./layout.scss";

const baseUrl = process.env.REACT_APP_CLOUDFLARE_PAGE_URL || "";

const fixRelativeAssets = (html: string, url: string) => {
    if (html) {
        return html.replace(/(href|src)="\.\/(.*?)"/g, `$1="${url}/$2"`);
    }
    return "";

};
const Layout = () => {
    let templateName = "carousel_with_cardlayout";
    const { data: htmlContent, isLoading, error } = useGetHtmlContentQuery(templateName, {
        skip: !templateName, // Only fetch when path is available
    });
    if (isLoading) return <div>Loading...</div>;
    if (error || !htmlContent) {
        console.log('htmlConten', htmlContent);
        console.log(error);
        return <div>Error loading content</div>;

    }
    const fixedHtml = fixRelativeAssets(htmlContent, "https://cms-themes.pages.dev");
    return (
        <iframe
            title="Design Preview"
            className="content-frame"
            srcDoc={fixedHtml}
            sandbox="allow-scripts allow-same-origin"
        />
    );
}


export default Layout;
