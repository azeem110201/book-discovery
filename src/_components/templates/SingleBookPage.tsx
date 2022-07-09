import React from 'react'
import HeroBookImage from 'ui-bookdiscoveryv2-42/dist/HeroCard70'
import HeroBodyContent from 'ui-bookdiscoveryv2-42/dist/HeroBodyContent'
import HeroCard from 'ui-bookdiscoveryv2-42/dist/HeroCard90'
import MainBody from 'ui-bookdiscoveryv2-42/dist/MainBody'
import FollowersReviews from 'ui-bookdiscoveryv2-42/dist/ReviewCard1';
import OtherReviews from 'ui-bookdiscoveryv2-42/dist/HeroCrad100'
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import api from '../../mocks/api';
import Navbar from '../organisms/Header'
import Suggested from "ui-bookdiscoveryv2-42/dist/HeroCard80"
import Organismscardrecommendations from "ui-bookdiscoveryv2-42/dist/HeroCrad10";
import Topics from 'ui-bookdiscoveryv2-42/dist/MainFrame';


const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
})

const BottomContainer = styled("div")({
    marginLeft:"250px",
  })

const Header = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#884FC1"
})

const BookDetails = styled("div")({
  width: "610px",
  height: "301px",
  position: "relative",
  top: "124px",
  left: "100px",
  display: "flex"
})

const BookDescription = styled("div")({
  width: "767px",
  height: "164px",
  position: "relative",
  top: "150px",
  left: "100px",
})

const AuthorDescription = styled("div")({
  width: "769px",
  height: "200px",
  position: "relative",
  top: "160px",
  left: "100px",
  display: "flex",
  flexDirection: "column",
})

const BooksFollowedByAuthor = styled("div")({
  width: "768px",
  height: "174px",
  position: "relative",
  top: "210px",
  left: "100px"
})

const AuthorFollowedHeader = styled("div")({
  height: "24px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between"
})

const FollowedAuthorsBooks = styled("div")({
  display: "flex",
  gap: "24px",
})

const ReviewsFromUsersYouFollow = styled("div")({
  width: "768px",
  height: "173px",
  position: "relative",
  left: "100px",
  top: "270px",
  display: "flex",
  flexDirection: "column",
})
const SuggestionComponent = styled('div')({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    gap:30,
    marginRight:100,
    justifyContent:"space-between"
  });
  
  const SuggestionHeader = styled('div')({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    marginRight:170,
    gap:30,
  });
const UsersYouFollowReviews = styled("div")({
  height: "132px",
  display: "flex",
})

const OtherReviewsHeader = styled("div")({
  width: "768px",
  height: "24px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  top: "330px",
  left: "100px",
})

const Reviews = styled("div")({
  marginTop: "50px",
  position: "relative",
  top: "280px",
  left: "100px",
  gap: "24px",
})

const Recommendations = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "1166px",
  height: "437px",
  position: "relative",
  top: "330px",
  left: "100px",
})

const RecommendationsBooks = styled("div")({
  display: "flex",
  position: "relative",
  gap: "24px",
})

const NewContainer=styled("div")({
    display:"flex",
  flexDirection:"column",
  gap:20,
})

const SuperContainer=styled("div")({
    display:"flex",
  flexDirection:"row",
  gap:200,
  marginRight:300
})
export type BookInfo={
  id:number, 
  title:string,
  author:string,
  description:string,
  image:string,
  category:string,
  rating:number,
  numberOfRatings:string,
  authorAvatar:string,
  status:{
    isReading:boolean,
    isBookmarked:boolean,
    isRecommended:boolean,
    peopleAlsoRead:boolean,
    isTopRated:boolean
  }
}
export type AllBooks={
  id:number, 
  title:string,
  author:string,
  image:string,
  category:string,
  rating:number,
  pages:string,
  numberOfRatings:string,
  status:{
    isReading:boolean,
    isBookmarked:boolean,
    isRecommended:boolean,
    peopleAlsoRead:boolean,
    isTopRated:boolean
  }
}

export type AllReviews={
  id:number,
  name:string,
  designation:string,
  rating:number,
  comment:string
}

const Book = () => {

let [explore, setExplore]= useState(false)

const [bookInfo, setBookInfo] = useState<BookInfo[]>([
  {
    id: 0,
    title: "",
    author: "",
    description:"",
    image: "",
    category: "",
    rating: 0,
    numberOfRatings:"",
    authorAvatar:"",
    status:{
      isReading:false,
      isBookmarked:false,
      isRecommended:false,
      peopleAlsoRead:false,
      isTopRated:false
    }
  },
  ]);
  const [allBooks, setAllBooks] = useState<AllBooks[]>([
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
        isReading:false,
        isBookmarked:false,
        isRecommended:false,
        peopleAlsoRead:false,
        isTopRated:false
      }
    },
  ]);
  const queryParams = new URLSearchParams(window.location.search);
  const ID = queryParams.get('id');
  const [status,setStatus]=useState("Start Reading")
  const [reviews,setReviews]=useState<AllReviews[]>([
    {
      id:1,
      name:"",
      designation:"",
      rating:0,
      comment:""
      }
  ])
  
  let getBookInfo = async () => {

    const response = await api.get(`/books/${ID}`)
    const data = response.data
    console.log(JSON.stringify(data))
    setBookInfo(data)
    if(data.status.isReading){
      setStatus("Continue Reading")
    }
  }
  const AllBooks=async ()=>{
    const response= await api.get("/books/")
    const data = response.data;
    setAllBooks(data)
 }

 const AllReviews=async ()=>{
  const response= await api.get("/reviews/")
  const data = response.data;
  setReviews(data)
}

let addToReading= async (num: number)=>{
  // @ts-ignore
  bookInfo.status.isReading=true
  await api.put(`/books/${num}`,bookInfo)
}
  useEffect(() =>{
    getBookInfo();
    AllBooks(); 
    AllReviews() 
},[] )
const navigate=useNavigate();
  return (
    
    <Container>
      <Header>
      <Navbar allBooks={allBooks} />
      </Header>
      <BottomContainer>
        <SuperContainer>
                <NewContainer>
                <BookDetails>
                    <HeroBookImage 
                    //@ts-ignore
                    overrides={{"Rectangle 14":{src:bookInfo.image},"Concise Inorganic Chemistry":{children:bookInfo.title},"By J D Lee":{children:bookInfo.author},"Category: Chemistry":{children:bookInfo.category},"4.5":{children:bookInfo.rating},"830 reviews":{children:bookInfo.numberOfRatings},"Button":{onClick:() => {addToReading(bookInfo.id);navigate('/seeallreading')}}}} />
                </BookDetails>

            <BookDescription>
                <HeroBodyContent />
            </BookDescription>
            <AuthorDescription>
                <MainBody />
            </AuthorDescription>
        </NewContainer>
        <NewContainer>
        
            <SuggestionHeader>
                  <p>Your Batchmates Also Read</p>
            </SuggestionHeader>
            <SuggestionComponent>
              
              {allBooks.filter((book) => book?.status?.isTopRated).map((book) => {
                return(
                  <Suggested 
                  //@ts-ignore
                  overrides={{"Rectangle 7":{src:book.image},"Inorganic Chemistry":{children:book.title},"Catergory - Chemistry":{children:book.category},"4.5":{children:book.rating}}}/>
              )})}
              
            </SuggestionComponent>
            <SuggestionHeader>
                  <a href=''><p style={{color:"#FF725E"}}>See More</p></a>
            </SuggestionHeader>
            
        </NewContainer>
      </SuperContainer>
      <BooksFollowedByAuthor>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Books by JD Lee
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <FollowedAuthorsBooks>
        {allBooks.filter((book) => book?.status?.isReading).slice(0,3).map((book) => {
                return(
                  <HeroCard 
                  //@ts-ignore
                  overrides={{"Rectangle 7":{src:book.image},"Inorganic Chemistry":{children:book.title},"Catergory - Chemistry":{children:book.category},"4.5":{children:book.rating}}}/>
              )})}
        </FollowedAuthorsBooks>
      </BooksFollowedByAuthor>
      <ReviewsFromUsersYouFollow>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Reviews of People you follow
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <UsersYouFollowReviews>
          <FollowersReviews />
        </UsersYouFollowReviews>
      </ReviewsFromUsersYouFollow>
      <OtherReviewsHeader>
        <Typography variant='subtitle2' color="#171717">
          Other reviews
        </Typography>
        <Typography variant='body2' color="#FF725E">
          see more
        </Typography>
      </OtherReviewsHeader>
      <Reviews>
        {/* <OtherReviews />
        <OtherReviews overrides={{ "Radha": { children: "Mira", } }} />
        <OtherReviews overrides={{ "Radha": { children: "Mike", } }} />
        <OtherReviews overrides={{ "Radha": { children: "Ben", } }} /> */}
        {reviews.map((review) => {
          return(
            <OtherReviews 
            //@ts-ignore
            overrides={{"Radha":{children:review.name},"Professor at Harvard University":{children:review.designation},"4.5":{children:review.rating},"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the See more":{children:review.comment}
          }}/>

          )
        })}
      </Reviews>
      <Recommendations>
        <AuthorFollowedHeader>
          <Typography variant='subtitle2' color="#171717">
            Recommendations
          </Typography>
          <Typography variant='body2' color="#FF725E">
            see more
          </Typography>
        </AuthorFollowedHeader>
        <RecommendationsBooks>
          {/* <RecommendatedBooks overrides={{ "Biology": { children: "Basic Physics", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Bio Organic Chemistry", }, }}/>
          <RecommendatedBooks overrides={{ "Biology": { children: "Crystal Chemistry", }, }}/>
          <RecommendatedBooks /> */}
          {allBooks.filter((book) => book?.status?.isRecommended).map((book) =>{
            return(
             <Organismscardrecommendations overrides={{"Rectangle 18":{src:book.image},"Biology":{children:book.title},
             //@ts-ignore
             "By SergeyVasutin":{children:book.author},"Category: Chemistry":{children:book.category},"530 ratings":{children:book.numberOfRatings},"3.5":{children:book.rating}}}/>
          )})}
        </RecommendationsBooks>
      </Recommendations>
      </BottomContainer>
      {explore ? <Topics
        //@ts-ignore
          overrides={{"MainFrame": { position: "absolute", top: "56px", left: "360px", zIndex: "10000" }, "Mathametics124669": { onClick: () => navigate("/seeallreading") } }}
        /> : null}
    </Container>
  )
}

export default Book