import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BsInfoCircle, BsPencil, BsTrash, BsPlusSquare } from 'react-icons/bs'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/books")
            .then(response => {
                // console.log(response.data);
                setBooks(response.data.data);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    return (
        <>
            <h1 className="display-4">Магазин книг</h1>
            <Link to="/books/create" className="p-1 fs-5">
                <BsPlusSquare />
            </Link>


            {loading ? (
                <Spinner />
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название</th>
                            <th>Автор</th>
                            <th>Год</th>
                            <th>Выполнить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publishYear}</td>
                                <td>
                                    <Link to={`/books/details/${book._id}`} className="px-2 text-info">
                                        <BsInfoCircle />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`} className="px-2">
                                        <BsPencil />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`} className="px-2 text-danger">
                                        <BsTrash />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            
        </>
    );
}

export default Home;