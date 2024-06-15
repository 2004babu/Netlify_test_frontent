import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  
  const [value,setvalue]=useState('')
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("http://localhost:5000/");
      return (setvalue(data.message));
    };
    fetch();
  }, []);

  return <div className="App">{value}</div>;
}

export default App;
