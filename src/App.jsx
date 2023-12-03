import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      
      <Hello />
      <Hello />

      
      <Message />

      {/* Nuevo componente Welcome con prop name */}
      <Welcome name={<strong>John</strong>} age={25}/>
    </div>
  );
}

export default App;
