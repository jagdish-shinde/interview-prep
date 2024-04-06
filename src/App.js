import React from 'react';
import GraphicalRepresentation from './graph';

const App = () => {
  // Sample data for 7 days
  const data = [10, 20, 15, 25, 30, 35, 40];

  return (
    <div>
      <h1>Graphical Representation</h1>
      <GraphicalRepresentation data={data} />
    </div>
  );
};

export default App;
