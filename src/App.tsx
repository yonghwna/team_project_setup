import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const vars = 1;
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
