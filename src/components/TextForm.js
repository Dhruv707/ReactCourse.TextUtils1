import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "info");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked ");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "info");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked ");
    setText("");
    props.showAlert("Text cleared", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // so here text=earlier value+new value typed
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "info");
  };

  const handleExtraSpaces = () => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "info");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgba(117, 117, 122, 0.564)",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {/* can alos use text.split(" ").filter((element)=>{return element.length!==0}) to count words */}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <h2>Text preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to preview it"}</p>
      </div>
    </>
  );
}
// TextForm.defaultProps = {
//   mode: "light"
// }//optional
