import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from './../components/BackButton';
import Spinner from './../components/Spinner';

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/books', data)
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
        <div>
            <BackButton />
            <h1 className="pt-3">Добавление книги</h1>
            {loading ? <Spinner /> : ''}
            <form style={{maxWidth: '600px'}} >
                <div className="mt-3">
                    <label htmlFor="titleInput" className="form-label">Название</label>
                    <input
                        id='titleInput'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="authorInput" className="form-label">Автор</label>
                    <input
                        id='authorInput'
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="publishYearInput" className="form-label">Дата публикации</label>
                    <input
                        id='publishYearInput'
                        type="text"
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary mt-4" type="button" onClick={handleSaveBook}>
                    Сохранить
                </button>

            </form>
        </div>
    );
}

export default CreateBook;