import { useEffect } from "react";
import axios from 'axios';

// sfc
const App = () => {

  useEffect(() => {
    axios.get("http://localhost:5555/books").then(
      response => console.log(response)
    )
  })


  return ( 
    <div className="container p-4">
      <h1>Всем привет!</h1>
    </div>
   );
}
 
export default App;