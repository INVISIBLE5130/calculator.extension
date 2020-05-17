import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].forEach(item => {
    calcBtns.push(
        <button onClick={event => {
          setData(data + event.target.value)
        }}
        value={item}
        key={item}
        >{item}</button>
    )
  })
  return (
    <div className="wrapper">
      <div className="show-input">
        {data}
      </div>
      <div className="buttons">
          <div>
              <button className="color-lightgrey" onClick={() => setData(data.substr(0,data.length - 1))}>
                  C
              </button>

              <button className="color-lightgrey" onClick={() => setData("")}>
                  AC
              </button>
          </div>

          {calcBtns}

          <div className="actions">
              <button className="color-lightOrange" onClick={event => setData(data + event.target.value)} value="+">
                  +
              </button>
              <button className="color-lightOrange" onClick={event => setData(data + event.target.value)} value="-">
                  -
              </button>
              <button className="color-lightOrange" onClick={event => setData(data + event.target.value)} value="*">
                  *
              </button>
              <button className="color-lightOrange" onClick={event => setData(data + event.target.value)} value="/">
                  /
              </button>
          </div>
      </div>
    </div>
  );
}

export default App;
