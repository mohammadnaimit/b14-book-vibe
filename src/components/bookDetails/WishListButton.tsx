'use client';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}: {book: IBook}) => {

    const {wishlist, setWishlist} = useContext(BooksContext);



    const handleAddToWishlist = () => {
        setWishlist([...wishlist, book]);
        toast.success(`You have added "${book.bookName}" to your wishlisht`);
    };
    return <button className="btn btn-primary rounded-xl px-8" onClick={() => handleAddToWishlist()}>Add to Wishlist</button>;
};

export default WishListButton;