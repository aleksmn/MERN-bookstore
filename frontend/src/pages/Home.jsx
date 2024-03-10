import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BsPlusSquare } from 'react-icons/bs'
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";


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


            {loading ? (<Spinner />) : 
                <BooksTable books={books}/>
            }
            
        </>
    );
}

export default Home;