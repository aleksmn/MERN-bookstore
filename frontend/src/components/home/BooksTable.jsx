import { BsInfoCircle, BsPencil, BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom";


const BooksTable = ({ books }) => {
    return (
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
    );
}


export default BooksTable;