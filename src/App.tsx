import * as React from "react";
import Home from "./_components/templates/Home";
import UsersBook from "./_components/templates/UsersBook";
import SingleBookPage from "./_components/templates/SingleBookPage";
import { MyLibrary } from "./_components/templates/MyLibrary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/searchresults" element={<UsersBook/>} />
            <Route path="/bookdetails" element={<SingleBookPage/>}/>
            <Route path="/seeallreading" element={<UsersBook/>}/>
            <Route path="/mylibrary" element={<MyLibrary/>}/>
          </Routes>
      </Router>
  );
};

export default App;
