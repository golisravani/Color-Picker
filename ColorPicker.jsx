import React, {useState} from "react";

function ColorPicker(){
 const [color, setColor] = useState("#ffffff");
 function handleColorPicker (e){
    setColor(e.target.value);
 }


 return ( <div className="colorPicker">
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor: color }}>
  <p> Selected : {color}</p>
  </div>
  <label >
    Select a color:
  </label>
    <input type="color" value={color} onChange={handleColorPicker}/>
    
 </div>)
}

export default ColorPicker;