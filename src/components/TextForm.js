import React, { useState, useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopyClick = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleListenNow = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    props.showAlert("Started reading text aloud.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const calculateSummary = () => {
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;
    const statements = (text.match(/\./g) || []).length;
    const questions = (text.match(/\?/g) || []).length;
    const exclamations = (text.match(/!/g) || []).length;
    const readingTime = (wordCount / 200).toFixed(2); // average reading time based on 200 words per minute

    return {
      wordCount,
      charCount,
      statements,
      questions,
      exclamations,
      readingTime,
    };
  };

  const { wordCount, charCount, readingTime } = calculateSummary();

  return (
    <div className="my-4">
      <h1>{props.heading}</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          ref={textAreaRef}
          value={text}
          onChange={handleOnChange}
          as="textarea"
          rows={8}
        />
      </Form.Group>
      <Button onClick={handleUpClick} variant="primary">
        Convert to Uppercase
      </Button>{" "}
      <Button onClick={handleLoClick} variant="secondary">
        Convert to Lowercase
      </Button>{" "}
      <Button onClick={handleClearClick} variant="success">
        Clear Text
      </Button>{" "}
      <Button onClick={handleCopyClick} variant="warning">
        Copy Text
      </Button>{" "}
      <Button onClick={handleRemoveExtraSpaces} variant="danger">
        Remove Extra Spaces
      </Button>{" "}
      <Button onClick={handleListenNow} variant="info">
        Listen now
      </Button>
      {/* Text Summary Section */}
      <div className="my-4">
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} words, {charCount} characters,
        </p>
        <p>{readingTime} Minutes read</p>
      </div>
      {/* Preview Section */}
      <div className="my-4">
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
