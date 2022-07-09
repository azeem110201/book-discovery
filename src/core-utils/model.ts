export type BooksDetails = {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
  rating: number;
  pages: string;
  numberOfRatings: string;
  status: {
    isReading: boolean;
    isBookmarked: boolean;
    isRecommended: boolean;
    peopleAlsoRead: boolean;
    isTopRated: boolean;
  };
};
