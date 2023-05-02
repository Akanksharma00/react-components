import React, {useState} from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#000000");

    const handleColorChange = (event) => {
      setColor(event.target.value);
    };
  
    return (
      <div>
        <h1>Color Picker</h1>
        <input type="color" value={color} onChange={handleColorChange} />
        <div style={{ backgroundColor: color, height: "100px", width: "100px" }}></div>
      </div>
    );
}

export default ColorPicker