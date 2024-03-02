import React, { useState, useEffect } from 'react'
import "./Style/Component2.css"
const Component2 = () => {
  const [value, setValue] = useState("");
  const [showvalue, setshowValue] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
    setShow(false);
  }
  return (
    <div className='container'>
      <div className='timer'>
        <h3>Enter Custom Toast Text</h3>
        <input type="text" placeholder='Enter Text' value={value} onChange={handleChange} />
        <br />
        <button onClick={() => { value && setShow(true); setshowValue(value); setValue('')
        setTimeout(() => {
          setShow(false);
        }, 7000);
      }}>Show Custom Toast</button>
      </div>
      {
        show ? (<div id='popup'><div><p className='custom'>{showvalue} </p></div><div id="cut2" onClick={() => { setShow(false) }}>X</div></div>) : ""
      }
    </div>
  )
}
export default Component2