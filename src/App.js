import {useState} from 'react';
import './App.css';
import Phase from './components/Phase';
import phases from './datos/datos.json';
import colors from './datos/colors.json';

function App() {

  const getNumber = (max) => {return Math.floor(Math.random() * max)};
  
  const changeQuote = ()=>{
    setPhase(phases[getNumber(phases.length)]);
    setColor(colors[getNumber(colors.length)]);
  }

  const [color, setColor] = useState(colors[getNumber(colors.length)])
  const [ phase, setPhase] = useState(phases[getNumber(phases.length)]);
  
  const {author, quote} = phase;

  return (
    <div className="App" style={{backgroundColor: color}} >
      <Phase author={author} quote={quote} changeQuote={changeQuote} color={color}/>
    </div>
  );
}

export default App;

