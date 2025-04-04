import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/footer";
import Card from '../src/Components/Card'

export default function Course() {
 
  const [book,setBook] =useState([]);
  useEffect(()=>{
     const allBooks= async ()=>{
        try {
          const response = await axios.get("http://localhost:3000/book");
          console.log(response.data);
          setBook(response.data);
        } catch (error) {
          console.log("error",error);
        }
     };
     allBooks();
  },[])
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl conatiner mx-auto md:px-20 px-4 min-w-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pt-28 text-center text-2xl md:text-4xl font-semibold ">
            We are delighted to have you{" "}
            <span className="text-pink-600">Here :)</span>
          </h1>

          <p className="mt-12">
            Step into a world of imagination and knowledge at our bookstore.
            From gripping novels to enlightening non-fiction, we offer a
            carefully curated collection for every reader. Whether you're a fan
            of fiction, mystery, history, or self-improvement, we have something
            special for you
          </p>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 "><Link to="/">Back</Link></button>
        </div>
        
        <div className="mt-12 grid grdi-cols-1 md:grid-cols-3">
        {
            book.filter(data=> data.price!==0).
            map(data=>(
              <Card key={data.id} item={data}/>
            ))
        }
        </div>
      </div>
      <Footer />
    </>
  );
}
