import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoaderSpinner from './LoaderSpinner';

const Books = () => {
    // Loader Spinner
    const loading = useNavigation();
    if (loading.state === 'loading') {
        return <LoaderSpinner />
    }

    const { books } = useLoaderData();
    // console.log(books);
    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 xm:grid-cols-2'>
                {
                    books.map(book => <Book key={book.isbn13} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;