
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl">
        {/* Image - Full Left Side */}
        <figure className="lg:w-1/3 bg-base-200">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full min-h-[500px] w-full object-cover"
          />
        </figure>

        {/* Details */}
        <div className="card-body lg:w-2/3">
          {/* Category & Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary badge-lg">
              {book.category}
            </span>

            <span className="rounded-full bg-yellow-100 px-4 py-2 font-bold text-yellow-600">
              ⭐ {book.rating} / 5
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-lg text-base-content/60">
            By <span className="font-semibold text-primary">{book.author}</span>
          </p>

          {/* Information */}
          <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-base-200 p-4 text-center">
              <p className="text-xs text-base-content/50">Pages</p>
              <p className="mt-1 text-lg font-bold">{book.totalPages}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-4 text-center">
              <p className="text-xs text-base-content/50">Published</p>
              <p className="mt-1 text-lg font-bold">{book.yearOfPublishing}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-4 text-center">
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="mt-1 truncate text-lg font-bold">
                {book.publisher}
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-4 text-center">
              <p className="text-xs text-base-content/50">Book ID</p>
              <p className="mt-1 text-lg font-bold">#{book.bookId}</p>
            </div>
          </div>

          {/* Review */}
          <div>
            <h3 className="mb-3 text-xl font-bold">About This Book</h3>

            <p className="text-sm leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5">
            <h3 className="mb-3 font-semibold">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="card-actions mt-5 flex justify-between gap-3">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
