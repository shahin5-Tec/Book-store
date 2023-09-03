import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails);
  const[fold,setFold]=useState(true)
  const { image, authors, publisher, desc, year, title, rating, price } =
    bookDetails;
  return (
    <div className="my-container ">
      <div className="flex flex-col lg:flex-row overflow-hidden mx-28 border">
        {/* image */}
        <div className="lg:w-1/2 h-full">
          <img
            src={bookDetails.image}
            alt="book cover"
            className="object-cover mt-0 w-full lg:h-full"
          />
        </div>
        {/* details-container */}
        <div className="p-8 lg:p-16 lg:w-1/2 ">
          <p className="bg-yellow-400 font-semibold uppercase mb-4 w-48 rounded-full pl-2  ">
            BRAND NEW
          </p>
          <p className="text-black font-bold text-3xl">{bookDetails.title}</p>
          <p className="mb-3">Authors: {bookDetails.authors}</p>
          <p className="mb-3">Publisher: {bookDetails.publisher}</p>
          <p className="mb-3">Year: {bookDetails.year}</p>
          <p className="mb-3">Rating: {bookDetails.rating}</p>
         {
          fold?(
            <>
            <p>{bookDetails.desc.substring(0,100)}...
            <span className="text-blue-600 cursor-pointer font-semiold
            " onClick={()=>setFold(!fold)}>
              Read More
            </span>
            </p>
            </>
          ):(
            <>
            <p>{bookDetails.desc}
            <span className="text-blue-600 cursor-pointer font-semiold
            " onClick={()=>setFold(!fold)}>
              Read Less
            </span>
            </p>
            </>
          )
         }
          <div className="inline-flex items-center">
            <span className="text-white font-semibold inline-flex items-center mt-3 px-6  btn bg-blue-400 hover:bg-blue-700 transition duration-200">
              <p>Buy Now</p>
            </span>
            <p className="mt-3 ms-3 font-bold text-xl">
              Price:{bookDetails.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
