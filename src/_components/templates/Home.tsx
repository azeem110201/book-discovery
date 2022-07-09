import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import api from '../../mocks/api';
import Banner from 'ui-bookdiscoveryv2-42/dist/BannerCard';
import BooksYouAreReading from "../organisms/BooksYouAreReading";
import Recommendation from "../organisms/Recommendation";
import TopicsYouFollow from "../organisms/TopicsYouFollow";
import PeopleFollowAlsoRead from "../organisms/PeopleFollowAlsoRead";
import TopRating from "../organisms/TopRating";
import Header from "../organisms/Header";
import StatusStats from "../organisms/StatusStats";

const BodyContainer = styled("div")({
    marginTop: 56,
  });
  
  const HeaderContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 56,
  });

type Props = {};

const Home = (props: Props) => {

  const [allBooks, setAllBooks] = useState([
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
        isTopRated: false
      }
    },
  ]);

  const AllBooks = async () => {
    const response = await api.get("/books/")
    const data = response.data;
    setAllBooks(data)
  }
  const [count, setCount] = useState(0)
  const [booksToRead, setBooksToRead] = useState(0)
  const Counter = async () => {
    const response = await api.get("/books/")
    const data = response.data;
    var counter = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i]?.status?.isReading) {
        counter += 1;
      }
    }
    setCount(counter)
    setBooksToRead(data.length - counter)
  }

  useEffect(() => {
    AllBooks();
  }, [])
  useEffect(() => {
    Counter();
  }, [])
  
  return (
    <HeaderContainer>
      <Header allBooks={allBooks} />

        <BodyContainer>
          <Banner overrides={{ "Button": { children: "Discover", backgroundColor: "#FF725E" } }} />
        </BodyContainer>

        <StatusStats count={count} booksToRead={booksToRead} />

        <BooksYouAreReading allBooks={allBooks} title="Books You are Reading" />
        <Recommendation allBooks={allBooks} title="Recommendation" />
        <PeopleFollowAlsoRead allBooks={allBooks} title="People you follow also Read"/>
        <TopicsYouFollow allBooks={allBooks} title="Topics" />
        <TopRating allBooks={allBooks} title="Top Rating" />

    </HeaderContainer>
  );
};

export default Home;
