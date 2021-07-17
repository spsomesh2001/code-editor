import React, { useEffect, useState } from "react";
import { MainCon } from "./MainElements";
import FileEx from "../FileEx/FileEx";
import CodeEd from "../CodeEd/CodeEd";
import OpRender from "../OpRender/OpRender";

const l = ["html", "css", "js"];

const Main = () => {
  // For selecting file
  const [fileSelect, setFileSelect] = useState(0);

  // File content
  const [htmlFile, setHtmlFile] = useState("");
  const [cssFile, setCssFile] = useState("");
  const [jsFile, setJsFile] = useState("");
  const [lang, setLang] = useState(l[fileSelect])

  useEffect(() => {
    setLang(l[fileSelect]);
  }, [fileSelect]);
  
  return (
    <>
      <MainCon>
        <FileEx fileSelect={fileSelect} setFileSelect={setFileSelect}></FileEx>
        <CodeEd
          fileSelect={fileSelect}
          setFileSelect={setFileSelect}
          htmlFile={htmlFile}
          setHtmlFile={setHtmlFile}
          cssFile={cssFile}
          setCssFile={setCssFile}
          jsFile={jsFile}
          setJsFile={setJsFile}
          lang={lang}
        ></CodeEd>
        <OpRender htmlFile={htmlFile} cssFile={cssFile} jsFile={jsFile}></OpRender>
      </MainCon>
    </>
  );
};

export default Main;
