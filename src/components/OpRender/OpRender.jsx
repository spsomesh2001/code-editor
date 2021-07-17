import React, { useEffect, useState } from "react";
import { SecCon, SecHCon, SecName } from "../Main/MainElements";
import { OpIframe, OpRenderCon } from "./OpRenderElements";

// This package will be used to sanitize HTML file content.
import dompurify from "dompurify";

const OpRender = ({ htmlFile, cssFile, jsFile }) => {

  // Initialize html code sanitizer
  const html_clean = dompurify.sanitize;

  // This state will be used to contain iframe's 'src' attribute value 
  const [url, setUrl] = useState("");

  // This function will give url of cleansed HTML code including CSS and JavaScript content.
  // Blob URL is used to create local file instance of the code and get the contents inserted 
  //  into blob file as a local URL whick can be used to insert the code into the 'iframe' tag.
  const generateIframeOutput = ({ html, css, js }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javascript");

    const output = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
        </head>
        <body>
          ${html}
          ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>
    `;

    return getBlobURL(output, "text/html");
  };
  
  // Generate BlobURL when there is change in any of the 3 file content.
  useEffect(() => {
    setUrl(
      generateIframeOutput({
        html: html_clean(htmlFile),
        css: cssFile,
        js: jsFile,
      })
    );
    // eslint-disable-next-line
  }, [htmlFile, cssFile, jsFile]);

  return (
    <>
      <OpRenderCon>
        <SecHCon>
          <SecName>Output</SecName>
        </SecHCon>

        <SecCon>
          <OpIframe src={url} title="Code Editor Render" sandbox></OpIframe>
        </SecCon>
      </OpRenderCon>
    </>
  );
};

export default OpRender;
