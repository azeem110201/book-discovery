import React, { useState } from 'react'
import Navbar from 'ui-bookdiscoveryv2-42/dist/NavBarNewv1';
import Topics from 'ui-bookdiscoveryv2-42/dist/MainFrame';
import SerachNotFound from 'ui-bookdiscoveryv2-42/dist/SerachNotFound'
import CardSearchjdlee from "ui-bookdiscoveryv2-42/dist/CardSearchjdlee";
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BooksDetails } from '../../core-utils/model';

type Props = {
    allBooks: BooksDetails[]
}

const SearchCardGrp = styled("div")(
    {
      marginTop: '5px',
      height: "auto",
      overflow: "hidden",
      position: "absolute",
      top: "60px",
      left: "900px",
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      overFlow: 'hidden',
      overflowY: 'auto',
      zIndex: "8888",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "455px",
    }
  )
  
  const IndividualSearchResults = styled("div")({
    width: "371px",
    height: "auto",
    position: "relative",
    margin: "16px",
  })
  
  const LimitedSearchResults = styled("div")({
    width: "400px",
    height: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  })

  const TopicsInFront = styled("div")({
    position: "absolute",
    zIndex: "7860",
    top: "64px",
    left: "380px",
  })

  const SeeMoreSearchedResults = styled("div")({
    '&:hover': {
      cursor: "pointer",
    }
  })

const Header = (props: Props) => {
  const [findTitle, setTitle] = useState<string>('');

  const [searchResults, setSearchResults] = useState<BooksDetails[]>([]);

  const [slicedSearchResults, setSlicedSearchResults] = useState<any>([]);

  let [explore, setExplore] = useState();

  const navigate = useNavigate();
  const searchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;

    setTitle(query);

    const searchResults = props.allBooks.filter((book) => {
      const dataFilter: string = book?.author?.toLowerCase();
      const bookFilter: string = book?.title?.toLowerCase();
      const categoryFilter: string = book?.category?.toLowerCase();

      return dataFilter?.includes(findTitle.toLowerCase()) || bookFilter?.includes(findTitle.toLowerCase()) || categoryFilter?.includes(findTitle.toLowerCase());
    })

    setSlicedSearchResults(searchResults.slice(0, 4));

    setSearchResults(searchResults);

  }
  return (
    <>
      <Navbar overrides={{
            //@ts-ignore
            "Button27082": { onClick: () => { explore ? setExplore(false) : setExplore(true); } },
            //@ts-ignore
            "SearchField": { onChange: searchText },
            //@ts-ignore
            "Button27087":{ onClick:() => navigate("/mylibrary")},
            //@ts-ignore
            "Button27078": { onClick: () => navigate("/")},
        }}/>

        {explore ? <TopicsInFront><Topics
        //@ts-ignore
          overrides={{"Mathametics124669": { onClick: () => navigate("/searchresults") } }}
        /></TopicsInFront> : null}

        <SearchCardGrp>
          {findTitle.length > 1 ? searchResults.length > 0 ?
            <LimitedSearchResults>
              {slicedSearchResults.map((value: BooksDetails) => {
                return (
                  <IndividualSearchResults key={value.id}>
                    <CardSearchjdlee key={value.id} overrides={{ "Inorganic Chemistry": { children: value.title }, "Rectangle 7": { src: value.image }, "By Jerome K. Jerome": { children: value.author }, "Catergory - Humorous": { children: "Catergory -" + value.category } }} />
                  </IndividualSearchResults>
                );
              })}
              <SeeMoreSearchedResults>
                <Typography onClick={() =>{ navigate('/searchresults', { state: { data: { searchResults } } }) } } variant="subtitle1" color="#FF725E">
                  see more results
                </Typography>
              </SeeMoreSearchedResults>
            </LimitedSearchResults>
            : <SerachNotFound overrides={{ "search": { children: "No Results found. Please try a different search term" } }} />
            : null}
        </SearchCardGrp>
    </>
  )
}

export default Header