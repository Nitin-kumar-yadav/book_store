import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publish);
                setTitle(response.data.title);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert("An error occurred. Please check the error message")
                console.log(error);
            })
    }, [])
    const handleEditBook = () => {
        const data = {

            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios.put(`https://book-store-api-six.vercel.app/books/${id}`, data)
            .then((response) => {
                setLoading(false);
                enqueueSnackbar('Book updated successfully', { variant: 'success' });
                navigate('/');


            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Book updated successfully', { variant: 'error' });
                setLoading(false);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Books</h1>
            {loading ? <Spinner /> : ""}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8 ' onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditBooks;