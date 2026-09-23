
import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";



const getBooks = async () => {
  try {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
  }catch(error) {
    console.error("Error fetching books data:", error);
    return [];
  }
  
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">📚 Popular Books</h2>
        <p className="mt-3 text-gray-500">Discover your next favorite book</p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book} />
        })}
      </div>
    </section>
  );
};

export default Books;
