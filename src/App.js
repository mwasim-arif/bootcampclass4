
import { useState } from 'react';
import {Alpha} from './Alpha';
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`bold ${isMorning ? 'dayLight' : 'advan'} `}>
      <h1>Have A Wonderful {isMorning ? 'Morning' : 'Night'}</h1>
      <Alpha counter={count}/>
      <br />
      <button onClick={
        ()=> setCount(++count) 
      }>
        Update Counter
      </button>


      <button onClick={()=> setMorning(!isMorning)}>
        Update Day
      </button>



    </div>
  );
}

export default App;
