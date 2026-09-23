
import React from "react";

import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";



const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">📚 Explore All Books</h2>
        <p className="mt-3 text-gray-500">Discover your next favorite book</p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book} />
        })}
      </div>
    </section>
  );
};

export default Books;
