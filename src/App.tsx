import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Articlepage from "./components/articlepage/articlepage";



function App() {
  // const currentId = useSelector((state: RootState) => state.articles.selectedArticle.id);
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <Homepage />
          </Suspense>
        }
      />
      <Route
        path="/article/:id"
        element={
          <Suspense fallback={<>...</>}>
            <Articlepage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
