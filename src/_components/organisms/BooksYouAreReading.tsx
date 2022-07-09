import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import theme from '../../core-utils/theme';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BooksCurrentlyReadingCard from 'ui-bookdiscoveryv2-42/dist/HeroCard30';
import { useNavigate } from "react-router-dom";
import { BooksDetails } from '../../core-utils/model';


type Props = {
    allBooks: BooksDetails[];
    title: string;
}

const BooksCurrentlyReading = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 128,
  gap: 16,
});

const BooksCurrentlyReadingText = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const BooksCurrentlyReadingSection = styled("div")({
  display: "flex",
  gap: 25,
});

const BooksCurrentlyReadingSectionArrowSection = styled("div")({
  "&:hover": {
    cursor: "pointer",
    "box-shadow": "5px 5px #e5ede4",
  },
});

const BooksYouAreReading = (props: Props) => {
  const navigate = useNavigate();

  const seeMoreReading= () =>{
    navigate("/seeallreading")
  }
  
  return (
    <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              {props.title}
            </Typography>
            <Typography variant='h6' color={theme.palette.primary.main500} onClick={seeMoreReading}>
              See more
              <KeyboardArrowRightIcon />
            </Typography>
          </BooksCurrentlyReadingText>

          <BooksCurrentlyReadingSection>
            {props.allBooks.filter((book) => book?.status?.isReading).slice(0, 4).map((book) => {
              return (
                <BooksCurrentlyReadingSectionArrowSection key={book.id}>
                  <BooksCurrentlyReadingCard key={book.id} overrides={{
                    //@ts-ignore
                    "Rectangle 7": { src: book.image }, "Three Men in a Boat": { children: book.title },
                    //@ts-ignore
                    "By Jerome K. Jerome": { children: book.author }, "Catergory - Humorous": { children: book.category }, "20/250 pages left": { children: book.pages }
                  }} />
                </BooksCurrentlyReadingSectionArrowSection>
              )
            })}


          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>
  )
}

export default BooksYouAreReading;