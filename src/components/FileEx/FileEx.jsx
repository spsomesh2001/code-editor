import React from "react";
import { SecCon, SecHCon, SecName } from "../Main/MainElements";
import { FIcon, File, FileExCon, FileList } from "./FileExElements";

import html_icon from "../../media/html.svg";
import css_icon from "../../media/css.svg";
import js_icon from "../../media/js.svg";

const FileEx = ({fileSelect, setFileSelect}) => {
  return (
    <>
      <FileExCon>
        <SecHCon><SecName>File Explorer</SecName></SecHCon>
        <SecCon>
          <FileList>
            {/* This is list of the 3 files in file explorer section. 'fileState' state in parent component
                will get updated whenever a file explorer list item is selected.*/}
            <File s={fileSelect === 0} onClick={() => setFileSelect(0)}><FIcon src={html_icon} alt="ico"></FIcon>index.html</File>
            <File s={fileSelect === 1} onClick={() => setFileSelect(1)}><FIcon src={css_icon} alt="ico"></FIcon>index.css</File>
            <File s={fileSelect === 2} onClick={() => setFileSelect(2)}><FIcon src={js_icon} alt="ico" h={true}></FIcon>index.js</File>
          </FileList>
        </SecCon>
      </FileExCon>
    </>
  );
};

export default FileEx;
