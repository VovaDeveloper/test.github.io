import React from 'react';
import data from "./data.json";
import Example from './button';
import "./styles.css"



function App() {
  return (
    <body>
    <div className="App">
      <h1 class="title">DB Fahrplanzeige</h1>
      <Example data={data} />
      <></>

    </div>
    
    </body>
    
  );
}
 
export default App;