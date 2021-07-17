import React, { useEffect, useState } from "react";
import { MainCon } from "./MainElements";
import FileEx from "../FileEx/FileEx";
import CodeEd from "../CodeEd/CodeEd";
import OpRender from "../OpRender/OpRender";

const l = ["html", "css", "js"];

const Main = () => {
  // States to track the language currently being edited. The 'fileSelect' state will also be used to
  // keep the language file selected in menu list(on wider screen).
  const [fileSelect, setFileSelect] = useState(0);
  const [lang, setLang] = useState(l[fileSelect])

  // File content for the 3 languages- HTML, CSS and JavaScript
  const [htmlFile, setHtmlFile] = useState("");
  const [cssFile, setCssFile] = useState("");
  const [jsFile, setJsFile] = useState("");

  // Update 'lang' state whenever 'fileSelect' is being changed
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
