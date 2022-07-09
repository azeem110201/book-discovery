import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import theme from '../../core-utils/theme';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Organismscardrecommendations from "ui-bookdiscoveryv2-42/dist/HeroCrad10"
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

const Recommendation = (props: Props) => {
  const navigate = useNavigate()
  
  const seeAllResults = () => {
    navigate('/searchresults')
  }
  return (
    <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6' fontWeight="bold">
              {props.title}
            </Typography>
            <Typography variant='h6' color={theme.palette.primary.main500} onClick={seeAllResults}>
              See more
              <KeyboardArrowRightIcon style={{paddingTop: "9px"}} />
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>

            {props.allBooks.filter((book) => book?.status?.isRecommended).slice(0, 4).map((book) => {
              return (
                <BooksCurrentlyReadingSectionArrowSection key={book.id}>
                  <Organismscardrecommendations key={book.id} overrides={{
                    //@ts-ignore
                    "Rectangle 18": { src: book.image }, "Biology": { children: book.title, onClick: () => { navigate(`/bookdetails/?id=${book.id}`) } },
                    //@ts-ignore
                    "By SergeyVasutin": { children: book.author }, "Category: Chemistry": { children: book.category }, "530 ratings": { children: book.numberOfRatings }, "3.5": { children: book.rating }
                  }} />
                </BooksCurrentlyReadingSectionArrowSection>
              )
            })}
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>
  )
}

export default Recommendation