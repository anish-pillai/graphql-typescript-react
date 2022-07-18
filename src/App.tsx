import './App.css';

import { useCallback, useState } from 'react';

import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';

const App = () => {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback((newId: any) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;
