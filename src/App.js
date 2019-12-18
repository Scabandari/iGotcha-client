import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [world, setWorld] = useState('');
  const { REACT_APP_SERVER: server } = process.env;

  useEffect(() => {
    const fetchData = async () => {
      //   console.log(`server: ${server}`);
      //   console.log(`server: ${JSON.stringify(process.env)}`);
      const response = await axios.get(`${server}`);
      setWorld(response.data);
    };
    fetchData();
  }, [server]);
  return <div className="App">hello {world}</div>;
}

export default App;
