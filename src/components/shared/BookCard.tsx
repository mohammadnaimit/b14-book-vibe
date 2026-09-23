import { IBook } from "@/types/books.type";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
    book: IBook
}

const BookCard = ({book}: IBookCardProps) => {
  return (
    <div
      
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Book Image */}
      <div className="relative h-[300px] overflow-hidden bg-gray-100">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-blue-600 shadow">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-white shadow">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-xl font-bold text-gray-800">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Book Info */}
        <div className="mt-4 flex items-center justify-between border-y border-gray-100 py-3 text-sm text-gray-500">
          <span>📄 {book.totalPages} Pages</span>
          <span>📅 {book.yearOfPublishing}</span>
        </div>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Publisher */}
        <div className="mt-4 text-sm text-gray-500">
          Publisher:{" "}
          <span className="font-semibold text-gray-700">{book.publisher}</span>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-blue-600">
          View Details →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
