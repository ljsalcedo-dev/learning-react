import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(c => c = event.target.value);
  };

  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#FFFFFF";
  };

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color, color: getContrastColor(color) }}>
          <p>{color}</p>
        </div>
        <label htmlFor="color"> Select a color:</label>
        <input
          type="color"
          name="color"
          id="color"
          onChange={handleColorChange}
        />
      </div>
    </>
  );
}
