import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import WorldNews from "./Components/World";
import PageNotFound from "./Components/PageNotFound"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/worldnews" element={<WorldNews/>}/>
       
        <Route component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
}
