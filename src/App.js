import './App.css';
import { useState } from 'react'
import View from './components/View'
import dataNum from './data/numbers'
import dataCol from './data/colors'


function App() {
  const [language, setLanguage] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setLanguage((prevLanguage) => !prevLanguage)}>
        {language ? "🌈" : "🔢"}
      </button>
      <br />
      <View words={language ? dataNum : dataCol} />
    </div>
  );
}

export default App;