import React, { useState } from "react";
import "../../styles/ProjectPreviewStyles/ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#00fffb");

  const handleColorChange = (e) => {
    const newColor = e.target.value; //Get the updated color
    setColor(newColor); // Update the state
    const styling = document.querySelector(".projects");
    if (styling) {
      styling.style.backgroundColor = newColor; //Update background color
    }
  };

  return (
    <div className="color-picker-container">
      <h2>COLOR PICKER</h2>
      <div
        className="color-picker-display"
        style={{ backgroundColor: color }}
      >
        <p>Selected Color: {color}</p>
      </div>
      <h5>CLICK COLOR PICKER TO CHANGE BACKGROUND COLOR</h5>
      <div className="color-picker">
        <span className="color-picker-arrow cpa-right" style={{color:"black", fontSize:"30px", marginRight: "10px"}}>→</span>
        <input
          className="color-input"
          type="color"
          value={color}
          title="Pick a color"
          onChange={handleColorChange}
        />
        <span className="color-picker-arrow cpa-left"style={{color:"black", fontSize:"30px", marginLeft: "10px", }}>←</span>
      </div>
      
    </div>
  );
}

export default ColorPicker;
