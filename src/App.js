import './App.css';
import { useState } from 'react'
import View from './components/View'
import dataNum from './data/numbers'
import dataCol from './data/colors'


function App() {
  const [language, setLanguage] = useState(true)

  return (
    <div className="App">
      <div className='tooltip'>
        <button
          onClick={() => setLanguage((prevLanguage) => !prevLanguage)}>
          <span className="tooltiptext" >
            {language ? "Change to colors" : "Change to numbers"}
          </span>
          {language ? "🌈" : "🔢"}
        </button>
      </div>
      <br />
      <View words={language ? dataNum : dataCol} />
    </div>
  );
}

export default App;