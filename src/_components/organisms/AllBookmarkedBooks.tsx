import styled from '@emotion/styled'
import Card from 'ui-bookdiscoveryv2-42/dist/HeroCrad60';
import Headline from 'ui-bookdiscoveryv2-42/dist/Headline';
import api from '../../mocks/api';
import React from 'react';
import { BooksDetails } from '../../core-utils/model';

type Props = {
    allBooks: BooksDetails[];
}

const BooksContainer = styled("div")({
    display:"flex",
    flexDirection:"row",
    marginLeft:100,
    marginRight:100,
    flexWrap:"wrap",
    justifyContent:"center",
    postion:"relative",
    
})

const SingleBookContainer= styled("div")({
   marginTop:12,
   marginBottom:12,
   marginLeft:12,
   marginRight:12,
   '&:hover': {
    cursor: 'pointer',
    'box-shadow': '5px 5px #e5ede4',
  },
})


const AllResults=styled("div")({
   display:"flex",
   flexDirection:"column"
})



const Typo= styled("div")({
   display:"flex",
   flexDirection:"row",
   marginLeft:390,
   marginTop:59
})

const AllBookmarkedBooks = (props: Props) => {
    const BookmarkStatus= async (num: number)=>{
        const response = await api.get(`/books/${num}`)
      const data = response.data
       data.status.isBookmarked = false;
        console.log(data.status?.isBookmarked+" harsha")
        await api.put(`/books/${num}`,data)
        // window.location.reload();
    }
  return (
    <AllResults>
        <Typo>
            <Headline overrides={{"Search Results for J D Lee":{children:"My Library"},"SelectField53442":{width:"150px"},"SelectField92765":{placeholder:"Sort By"}}}/>
        </Typo>
        <BooksContainer>
            {props.allBooks.filter((book) => (book?.status?.isBookmarked)).map((book) => {
                return (
                    <SingleBookContainer key={book.id}>
                        <Card key={book.id}
                        //@ts-ignore
                        overrides={{"Rectangle 13":{src:book.image}, "J D Lee":{children:book.author,onClick:() => { console.log("harsha")}},
                        //@ts-ignore
                        "Inorganic Chemistry":{children:book.title,onClick:() => {navigate(`/bookdetails/?id=${book.id}`)}},"Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more":{children:book.description},
                        //@ts-ignore
                        "830 ratings":{children:book.numberOfRatings},"4.5":{children:book.rating},"Catergory - Humorous":{children:book.category},"MyIcon/bookmark_border":{onClick:()=>{BookmarkStatus(book.id)}}}}/>
                    </SingleBookContainer>
                );
            })}
        </BooksContainer>
    </AllResults>
  )
}

export default AllBookmarkedBooks;