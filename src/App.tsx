import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Articlepage from "./components/articlepage/articlepage";



function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Homepage />
          </Suspense>
        }
      />
      <Route
        path="/article/:id"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Articlepage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
