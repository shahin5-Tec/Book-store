import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Book = ({ book }) => {

  
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="my-container lg:py-8">
        <div className=" overflow-hidden relative transation-duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl ">
          <img
            src={book.image}
            alt="book cover"
            className="object-cover w-full lg:h-64 md:72 xl:80"
          />
          <div className=" overflow-hidden bg-black bg-opacity-75 text-white opacity-0 hover:opacity-100 absolute inset-0 px-6 py-4 transation-opacity-duratopn-200 flex flex-col">
            <p>{book.title}</p>
            <p>{book.subtitle.substring(0, 45)}...</p>
            <p className="mt-auto">Price:{book.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
