import {useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from './../components/BackButton';
import Spinner from './../components/Spinner';


const DeleteBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
            setTitle(response.data.title)
            setLoading(false)
        }).catch((error) => {
            setLoading(false);
            alert('Ошибка. Смотрите сообщение в консоли')
            console.log(error)
        })
    }, [id])


    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('Ошибка. Смотрите сообщение в консоли')
                console.log(error)
            })
    };

    return (
        <div className="p-4">
            <BackButton />
            <h1 className="pt-3">Удалить книгу</h1>
            {loading ? <Spinner /> : ''}
            <div className="mt-3">
                <h4 className="pt-3">Уверены, что хотите удалить книгу?</h4>
                <ul>
                    <li>Название: {title}</li>
                    <li>Автор: {author}</li>
                    <li>Год издания: {publishYear}</li>

                </ul>
            </div>
            <button 
                className="btn btn-danger mt-4" 
                type="button" 
                onClick={handleDeleteBook}
            >
                Удалить
            </button>
        </div>
    );
}

export default DeleteBook;