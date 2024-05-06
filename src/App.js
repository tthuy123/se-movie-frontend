import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import AccountDetail from "./pages/AccountDetail.jsx";
import MovieDetail from "./pages/MovieDetails.jsx";
import PersonDetail from "./pages/PersonDetail.jsx";
import Discover from "./pages/Discover.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import MovieSearch from "./pages/MediaSearch.jsx";
import AccountSettings from "./pages/AccountSettings.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassWord.jsx";
import Footer from "./components/common/Footer.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword.jsx";
import { Box } from "@mui/material";


function App() {
  const token = localStorage.getItem("token");
  return (
    
    <BrowserRouter>
   
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavBar />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
            <Route path="/movie" element={<Discover />} />
            <Route path="/login" element={token ? <HomePage/> : <Login />}/>
            <Route path="/signup" element={token ? <HomePage/> : <SignUp />} />
            <Route path="/account/:username" element={<AccountDetail />} />
            <Route path="/person/:personId" element={<PersonDetail />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/account/:username/update-profile" element={<UpdateProfile />} />
            <Route path="/account/:username/update-password" element={<UpdatePassword />} />
          </Routes>
        </Box>
        
        <Footer style={{ marginTop: "auto" }} />
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
