import React, { useEffect, useState } from 'react';
import "./Style/Component1.css"
const Component1 = () => {
  const [value, setValue] = useState([]);
  const [show, setShow] = useState(false);
  
  const handleValue = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const showMessage = () => {
    const last = value[value.length - 1];
    setValue([...value, last + 1]);
    console.log(value.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (value.length > 0) {
        setValue(prevValue => prevValue.slice(0, -1)); // Remove the last item
      }
    }, 1000); // Remove one item every second

    return () => clearInterval(interval);
  }, [value]); // Run effect whenever value changes

  return (
    <div>
      <button onClick={showMessage}>Show Message</button>
      <ul id='ULLIST'>
        {value.map((item, index) => (
          <li key={index} className='list' >Testing {index+1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Component1;
