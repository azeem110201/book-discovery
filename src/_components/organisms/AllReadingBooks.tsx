import styled from '@emotion/styled';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Organismscardsearchresults from "ui-bookdiscoveryv2-42/dist/HeroCrad60";
import api from '../../mocks/api';
import { BooksDetails } from '../../core-utils/model';

const BooksContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    marginLeft: 100,
    marginRight: 100,
    flexWrap: "wrap",
    justifyContent: "center",
    postion: "relative",
  });
  
  const SingleBookContainer = styled("div")({
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    "&:hover": {
      cursor: "pointer",
      "box-shadow": "5px 5px #e5ede4",
    },
  });

type Props = {
    books: BooksDetails[];
}

const AllReadingBooks = (props: Props) => {
    const navigate = useNavigate();

    const data: any = useLocation().state ?? null ?? undefined;

    // props.books = data.data.searchResults;

    console.log(data);

    console.log(props.books);
    
    let BookmarkStatus = async (num: number) => {
        const response = await api.get(`/books/${num}`);
        const data = response.data;

        data.status.isBookmarked = data.status?.isBookmarked ? false : true;
        await api.put(`/books/${num}`, data);
      };

  return (
    <BooksContainer>
        {/* {props.books
            .filter((book) => book?.status?.isReading)
            .map((book) => {
                return (
                  <SingleBookContainer key={book.id}>
                    <Organismscardsearchresults 
                        //@ts-ignore
                        overrides={{"Rectangle 13":{src:book.image}, "J D Lee":{children:book.author,onClick:() => { console.log("harsha")}},
                        //@ts-ignore
                        "Inorganic Chemistry":{children:book.title,onClick:() => {navigate(`/bookdetails/?id=${book.id}`)}},"Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more":{children:book.description},
                        //@ts-ignore
                        "830 ratings":{children:book.numberOfRatings},"4.5":{children:book.rating},"Catergory - Humorous":{children:book.category},"MyIcon/bookmark_border":{onClick:()=>{BookmarkStatus(book.id);navigate(`/mylibrary`)}}}}/>
                  </SingleBookContainer>
                );
              })} */}

              { data ? data.data.searchResults
            .map((book: BooksDetails) => {
                return (
                  <SingleBookContainer key={book.id}>
                    <Organismscardsearchresults 
                        //@ts-ignore
                        overrides={{"Rectangle 13":{src:book.image}, "J D Lee":{children:book.author,onClick:() => { console.log("harsha")}},
                        //@ts-ignore
                        "Inorganic Chemistry":{children:book.title,onClick:() => {navigate(`/bookdetails/?id=${book.id}`)}},"Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more":{children:book.description},
                        //@ts-ignore
                        "830 ratings":{children:book.numberOfRatings},"4.5":{children:book.rating},"Catergory - Humorous":{children:book.category},"MyIcon/bookmark_border":{onClick:()=>{BookmarkStatus(book.id);navigate(`/mylibrary`)}}}}/>
                  </SingleBookContainer>
                );
              }) : props.books
              .filter((book: BooksDetails) => book?.status?.isReading)
              .map((book: BooksDetails) => {
                  return (
                    <SingleBookContainer key={book.id}>
                      <Organismscardsearchresults 
                          //@ts-ignore
                          overrides={{"Rectangle 13":{src:book.image}, "J D Lee":{children:book.author,onClick:() => { console.log("harsha")}},
                          //@ts-ignore
                          "Inorganic Chemistry":{children:book.title,onClick:() => {navigate(`/bookdetails/?id=${book.id}`)}},"Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more":{children:book.description},
                          //@ts-ignore
                          "830 ratings":{children:book.numberOfRatings},"4.5":{children:book.rating},"Catergory - Humorous":{children:book.category},"MyIcon/bookmark_border":{onClick:()=>{BookmarkStatus(book.id);navigate(`/mylibrary`)}}}}/>
                    </SingleBookContainer>
                  );
                })}
    </BooksContainer>
  )
}

export default AllReadingBooks