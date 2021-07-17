import React, { useEffect, useRef, useState } from "react";
import { SecCon, SecHCon, SecName } from "../Main/MainElements";
import {
  CodeArea,
  CodeEdCon,
  InpCon,
  SynCode,
  SynHigh,
} from "./CodeEdElements";

import hljs from "highlight.js";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

// Added custom styles to material-ui menu component
const CustomSelectInput = withStyles({
  root: {
    color: "white",
    fontFamily: ["Times New Roman", "Times", "serif"],
    fontSize: 18,
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
  },
})(InputBase);

const CodeEd = ({
  fileSelect,
  setFileSelect,
  htmlFile,
  setHtmlFile,
  cssFile,
  setCssFile,
  jsFile,
  setJsFile,
  lang,
}) => {

  // This array will be used to display file name selected
  const file_name = ["index.html", "index.css", "index.js"];

  // React DOM element reference to textarea and code HTML elements
  const inpCon = useRef(null);
  const highlightCon = useRef(null);

  // State to handle file menu on less-wider screen
  const [resp, setResp] = useState(false);

  // Function to handle state to show file select menu on less-wider screens
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setResp(true);
    } else {
      setResp(false);
    }
  };

  // This function will sync the scroll of textarea and code block when overflow occurs
  const handleScroll = () => {
    highlightCon.current.scrollTop = inpCon.current.scrollTop;
    highlightCon.current.scrollLeft = inpCon.current.scrollLeft;
  };

  // Check whether to display the smaller file menu on less wide screen
  useEffect(() => {
    handleResize();
  }, []);

  // Highlight syntax of all 3 code written whenever there is change in its content
  useEffect(() => {
    hljs.highlightElement(highlightCon.current);
    inpCon.current.focus();
  }, [htmlFile, cssFile, jsFile, lang]);

  // Resize event listener to trigger handleResize function
  window.addEventListener("resize", handleResize);

  return (
    <>
      <CodeEdCon>
        <SecHCon>
          <SecName>
            Code Editor {resp ? "" : `( ${file_name[fileSelect]} )`}
          </SecName>
          {resp ? (
            <>
              <Select
                value={fileSelect}
                onChange={(e) => setFileSelect(e.target.value)}
                input={<CustomSelectInput />}
              >
                <MenuItem
                  style={{
                    fontFamily: ["Times New Roman", "Times", "serif"],
                    fontSize: 18,
                  }}
                  value={0}
                >
                  index.html
                </MenuItem>
                <MenuItem
                  style={{
                    fontFamily: ["Times New Roman", "Times", "serif"],
                    fontSize: 18,
                  }}
                  value={1}
                >
                  index.css
                </MenuItem>
                <MenuItem
                  style={{
                    fontFamily: ["Times New Roman", "Times", "serif"],
                    fontSize: 18,
                  }}
                  value={2}
                >
                  index.js
                </MenuItem>
              </Select>
            </>
          ) : (
            <></>
          )}
        </SecHCon>

        <SecCon>
          <CodeArea>
            <InpCon
              ref={inpCon}
              onScroll={() => handleScroll()}
              value={
                fileSelect === 0
                  ? htmlFile
                  : fileSelect === 1
                  ? cssFile
                  : jsFile
              }
              onChange={(e) =>
                fileSelect === 0
                  ? setHtmlFile(e.target.value)
                  : fileSelect === 1
                  ? setCssFile(e.target.value)
                  : setJsFile(e.target.value)
              }
            ></InpCon>
            <SynHigh>
              <SynCode ref={highlightCon} className={lang}>
                {fileSelect === 0
                  ? htmlFile
                  : fileSelect === 1
                  ? cssFile
                  : jsFile}
              </SynCode>
            </SynHigh>
          </CodeArea>
        </SecCon>
      </CodeEdCon>
    </>
  );
};

export default CodeEd;
