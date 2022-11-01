import './App.css';
import { useState } from 'react'
import View from './components/View'
import dataJap from './data/japanese'
import dataEng from './data/english'


function App() {
  const [language, setLanguage] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setLanguage((prevLanguage) => !prevLanguage)}>
        {language ? "🗽" : "🗾"}
      </button>
      <br />
      <View words={language ? dataJap : dataEng} />
    </div>
  );
}

export default App;