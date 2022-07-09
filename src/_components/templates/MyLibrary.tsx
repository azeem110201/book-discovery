import Header from "../organisms/Header";
import React, { useState,useEffect } from 'react';
import api from '../../mocks/api';
import PageNumbers from 'ui-bookdiscoveryv2-42/dist/PageNumbers';
import styled from "@emotion/styled"
import AllBookmarkedBooks from "../organisms/AllBookmarkedBooks";
import NoBookmark from '../organisms/NoBookmark';

const WholeContainer=styled("div")({
   width:"100%"
})

const Pagination=styled("div")({
 marginLeft:1180,
 marginTop:40,
 marginBottom:46,
 marginRight:24,
 display:"flex",
 flexDirection:"row",
})

const Pages=styled("div")({
   marginLeft:24
 })

export const MyLibrary = () => {

    const [books, setBooks] = useState([
      {
        id: 1,
        title: "",
        author: "",
        image: "",
        category: "",
        rating: 0,
        pages:"",
        numberOfRatings:"",
        status:{
          isReading:true,
          isBookmarked:false,
          isRecommended:false,
          peopleAlsoRead:false,
          isTopRated:false
        }
      },
      ]);
      

      const getBooks = async () => {
        const response = await api.get("/books/");
        const data = response.data;
        console.log("working")
        setBooks(data);
      };

    useEffect(() =>{
        console.log("useEffect")
        getBooks();  
    },[] )

    const bookmarkeds = books.filter((book) => book?.status?.isBookmarked) 

    console.log(bookmarkeds.length);
      return (
          <WholeContainer>
             <Header allBooks={books} />


             {bookmarkeds.length > 0 ? 
             <>
             <AllBookmarkedBooks allBooks={books} />
             <Pagination>
                 <div style={{fontSize:"16px",fontWeight:"400px",fontFamily:"roboto"}}> 1 to 10 of 1228 results </div>
                 <Pages>
                    <PageNumbers />
                 </Pages>
             </Pagination></>: <NoBookmark />}

             
          </WholeContainer>
        );
}
