import React, { useEffect, useState } from "react";
import { SecCon, SecHCon, SecName } from "../Main/MainElements";
import { OpIframe, OpRenderCon } from "./OpRenderElements";

import dompurify from "dompurify";

const OpRender = ({ htmlFile, cssFile, jsFile }) => {
  const html_clean = dompurify.sanitize;
  const [url, setUrl] = useState("");

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
          <OpIframe src={url} title="Code Editor Render"></OpIframe>
        </SecCon>
      </OpRenderCon>
    </>
  );
};

export default OpRender;
