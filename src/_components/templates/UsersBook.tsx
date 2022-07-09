import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import api from '../../mocks/api';
import Headline from "ui-bookdiscoveryv2-42/dist/Headline";
import PageNumbers from "ui-bookdiscoveryv2-42/dist/PageNumbers";
import Header from "../organisms/Header";
import AllReadingBooks from "../organisms/AllReadingBooks";


const WholeContainer = styled("div")({
  width: "100%",
});

const AllResults = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Pagination = styled("div")({
  marginLeft: 1180,
  marginTop: 40,
  marginBottom: 46,
  marginRight: 24,
  display: "flex",
  flexDirection: "row",
});

const Pages = styled("div")({
  marginLeft: 24,
});

const Typo = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginLeft: 390,
  marginTop: 59,
});



type Props = {};

const UsersBook = (props: Props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "",
      author: "",
      image: "",
      category: "",
      rating: 0,
      pages: "",
      numberOfRatings: "",
      status: {
        isReading: true,
        isBookmarked: false,
        isRecommended: false,
        peopleAlsoRead: false,
        isTopRated: false,
      },
    },
  ]);

  const getBooks = async () => {
    const response = await api.get("/books/");
    const data = response.data;
    console.log("working");
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);
    return (
      <WholeContainer>
        <Header allBooks={books}/>
        <AllResults>
          <Typo>
            <Headline
              overrides={{
                "Search Results for J D Lee": {
                  children: "Books you are Reading",
                },
                SelectField53442: { width: "150px" },
                SelectField92765: { placeholder: "Sort By" },
              }}
            />
          </Typo>
          <AllReadingBooks books={books} />
        </AllResults>
        <Pagination>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "400px",
              fontFamily: "roboto",
            }}
          >
            {" "}
            1 to 10 of 1228 results{" "}
          </div>
          <Pages>
            <PageNumbers />
          </Pages>
        </Pagination>
      </WholeContainer>
    );
};

export default UsersBook;
