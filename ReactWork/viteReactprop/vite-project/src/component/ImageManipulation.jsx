import React, { useState } from "react";

const ImageManipulation = () => {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Image Preview */}
      <div>
        <h2>Image Manipulation Component</h2>
        <div
          style={{
            border: "2px solid red",
            width: "400px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            background: "#fafafa",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/tropical-plant-transparent-background_1308-75855.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Plant"
            height={height}
            width={width}
            style={{
              objectFit: "cover",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      </div>
 
      <div style={{ padding: "12px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
           
          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: 600, minWidth: "60px" }}>Height</span>
            <button
              onClick={() => setHeight((h) => Math.max(50, h - 50))}
              style={btnStyle("#f0f0f0", "#333")}
            >
              -
            </button>
            <span style={valueStyle}>{height}px</span>
            <button
              onClick={() => setHeight((h) => Math.min(400, h + 50))}
              style={btnStyle("#4CAF50", "white")}
            >
              +
            </button>
          </li>
 
          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: 600, minWidth: "60px" }}>Width</span>
            <button
              onClick={() => setWidth((w) => Math.max(50, w - 50))}
              style={btnStyle("#f0f0f0", "#333")}
            >
              -
            </button>
            <span style={valueStyle}>{width}px</span>
            <button
              onClick={() => setWidth((w) => Math.min(400, w + 50))}
              style={btnStyle("#4CAF50", "white")}
            >
              +
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
 
const btnStyle = (bg, color) => ({
  background: bg,
  color,
  border: "1px solid #ccc",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  fontSize: "16px",
  lineHeight: 1,
  transition: "all 0.2s ease",
});

const valueStyle = {
  display: "inline-block",
  minWidth: "68px",
  textAlign: "center",
  padding: "6px 8px",
  borderRadius: "6px",
  background: "#fff",
  border: "1px solid #e6e6e6",
  fontFamily: "monospace",
};

export default ImageManipulation;
