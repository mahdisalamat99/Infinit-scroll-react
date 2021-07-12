import React,{ useState, useEffect  } from 'react';
import './App.css';

function App() {
  const [boxes,setBoxes] = useState([{bg: "#" + (Math.random() * 0xffffff <<0).toString(16)}]);

  useEffect (() => {
    
     const Interval = setInterval ( () => {
      setBoxes([...boxes, {bg: "#" + (Math.random() * 0xffffff <<0).toString(16) }])
    },100 )
    return () => clearInterval(Interval);
  
  },[boxes]);


  return (
    <div className="hero">
      {boxes.map((box, index) => (
        <box key={index} className='box' style={{background:box.bg}}>
        <p>{index}</p>
      </box>
  ))}
    </div>
  );
}

export default App;
