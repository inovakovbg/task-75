import "./App.css";
import React ,{useEffect, useState} from "react";

function App() {



  const [text , setText] = useState(JSON.parse(localStorage.getItem('dataText')));

  console.log({text});


  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea 
               value={text}
               className="textarea is-large" 
               placeholder="Notes..."
               onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <button className="button is-large is-primary is-active"
        onClick={(e) => localStorage.setItem('dataText', JSON.stringify(text))}
        >Save
        </button>

        <button 
        className="button is-large"
        onClick={(e) =>{setText("")}}
        >Clear
        </button>
      </div>
    </div>
  );
}

export default App;
