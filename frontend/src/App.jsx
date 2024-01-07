import { useEffect } from "react";
import axios from 'axios';
import { Route, Routes } from "react-router";
import Home from './pages/Home';
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
// sfc
const App = () => {

  useEffect(() => {
    axios.get("http://localhost:5555/books").then(
      response => console.log(response)
    )
  })

  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
   );
}
 
export default App;