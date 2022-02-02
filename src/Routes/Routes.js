import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Question from "../Pages/QuestionPage/Question";
import Test from "../Pages/Tests/Tests";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
