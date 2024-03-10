import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md'>Author</th>
                    <th className='border border-slate-600 rounded-md'>Publish Year</th>
                    <th className='border border-slate-600 rounded-md'>Operation</th>
                </tr>
            </thead>
            <tbody>
                {books.map((books, index) => (
                    <tr key={books._id} className='h8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>

                        <td className='border border-slate-700 rounded-md text-center'>
                            {books.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {books.author}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {books.publishYear}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/books/details/${books._id}`}>
                                    <BsInfoCircle className="text-green-800 " />
                                </Link>
                                <Link to={`/books/edit/${books._id}`}>
                                    <AiOutlineEdit className="text-yellow-600 " />
                                </Link>
                                <Link to={`/books/delete/${books._id}`}>
                                    <MdOutlineDelete className="text-red-600 " />
                                </Link>
                            </div>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookTable;