import React from 'react';
import Calcule from './Calcule';

function App() {
  return (
  <div style={{borderColor:'red',borderStyle:'solid',display:'flex',height:'90vh',overflow:'hidden'}}>
      <div style={{borderColor:'blue', borderStyle:'solid',flexGrow:2}}>
        <Calcule/>
      </div>
      <div style={{borderColor:'green', borderStyle:'solid',flexGrow:1}}>

      </div>
    </div>
  );
}

export default App;
