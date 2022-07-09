import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import theme from '../../core-utils/theme';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TopicsFollow from 'ui-bookdiscoveryv2-42/dist/HeroCard50';
import { useNavigate } from "react-router-dom";
import React from 'react'
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

const TopicsYouFollow = (props: Props) => {
  const navigate = useNavigate()
  
  const seeAllResults = () => {
    navigate('/searchresults')
  }
  return (
    <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              Topics you follow
            </Typography>
            <Typography variant='h6' color={theme.palette.primary.main500} onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon />
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            {props.allBooks.filter((book) => book?.status === null).slice(0, 6).map((book) => {
              return (
                <BooksCurrentlyReadingSectionArrowSection key={book.id}>
                  <TopicsFollow key={book.id} overrides={{
                    //@ts-ignore
                    "Rectangle 10": { src: book.image },
                    //@ts-ignore
                    "GEOGRAPHY": { children: book.category }
                  }} />
                </BooksCurrentlyReadingSectionArrowSection>
              )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>
  )
}

export default TopicsYouFollow