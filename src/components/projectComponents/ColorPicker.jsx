import React, {useState} from 'react';
import "../../styles/ProjectStyles/ColorPicker.css"

function ColorPicker(){

  const [color,setColor] = useState('#00fffb');

  const handleColorChange = (e) => 
    {
      setColor(e.target.value);
      const styling = document.querySelector('.color-picker-container');
      styling.style.backgroundColor=color;
    }
  return(
    <div className='color-picker-container ' >
      <h2>COLOR PICKER</h2>
      <div className="color-picker-display " style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <h5>SELECT COLOR:</h5>
      <input type="Color" value={color} onChange={handleColorChange}/>
    </div>
  );

}

export default ColorPicker;

