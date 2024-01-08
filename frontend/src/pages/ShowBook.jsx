import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


const ShowBook = () => {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then(response => {
                setBook(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [id]);
    return ( 
    <div>
        <BackButton />
        <h1 className="pt-3">Информация о книге</h1>
        {loading ? (
            <Spinner />
        ) : (
            <ul className="p-3">
                <li>Id: {book._id}</li>
                <li>Название: {book.title}</li>
                <li>Автор: {book.author}</li>
                <li>Год издания: {book.publishYear}</li>
                <li>Дата создания: {new Date(book.createdAt).toLocaleString()}</li>
                <li>Последние изменения: {new Date(book.updatedAt).toLocaleString()}</li>
            </ul>
        )}
    </div> 
    );
}
 
export default ShowBook;