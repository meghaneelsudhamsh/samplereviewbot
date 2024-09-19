import React, { useState } from "react";

const Chatbot = () => {
  const [text, setText] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAnalyze = () => {
    // For now, this just sets the entire text as "pros" and "cons" for demo purposes.
    // You can modify this logic to split the input text based on your requirements.
    setPros(`Pros of: ${text}`);
    setCons(`Cons of: ${text}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chatbot</h2>
      <div>
        <label>Input Text: </label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here"
          style={{ marginBottom: "10px", width: "100%" }}
        />
      </div>

      <div>
        <button onClick={handleAnalyze}>Analyze</button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div style={{ flex: 1, marginRight: "10px", textAlign: "center" }}>
          <h3>Pros</h3>
          <div
            style={{
              border: "1px solid #000",
              padding: "10px",
              height: "200px",
              overflowY: "auto",
              backgroundColor: "#f0f0f0"
            }}
          >
            {pros ? pros : "No pros yet."}
          </div>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <h3>Cons</h3>
          <div
            style={{
              border: "1px solid #000",
              padding: "10px",
              height: "200px",
              overflowY: "auto",
              backgroundColor: "#f0f0f0"
            }}
          >
            {cons ? cons : "No cons yet."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
