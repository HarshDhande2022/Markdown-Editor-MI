import { useState } from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [createMarkDown, setMarkdown] = useState("Markdown Preview");
  return (
    <>
      <div >
        <h2>MARKDOWN EDITER</h2>
      </div>
      <div className="container">
        <textarea
          value={createMarkDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="output">
        <ReactMarkdown>{createMarkDown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;