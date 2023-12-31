import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingPage from "./LoadingPage";

const Books = () => {
  const navigation = useNavigation();
  console.log(navigation);
  if (navigation.state === "loading") {
    return <LoadingPage />;
  }
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-row  ">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
