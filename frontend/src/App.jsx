import { Route, Routes } from "react-router";
import Home from './pages/Home';
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
// sfc
const App = () => {

  return ( 
    <div className="container p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
   );
}
 
export default App;