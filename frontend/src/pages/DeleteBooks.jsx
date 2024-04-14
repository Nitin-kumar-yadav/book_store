import React, { useState } from 'react'
import axios from 'axios';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const DeleteBooks = () => {

    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`https://book-store-api-nine.vercel.app/books/${id}`)
            .then((response) => {
                setLoading(false);
                enqueueSnackbar("Book deleted successfully", { variant: "success" });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                // alert("An error occurred while deleting")
                enqueueSnackbar("Book is not deleted", { variant: "error" });
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ""}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>
                    Are You Sure You want to Delete this Book?
                </h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteBook}
                >
                    Yes, Delete it
                </button>

            </div>
        </div>
    )
}

export default DeleteBooks
