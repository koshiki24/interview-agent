import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from "./pages/Dashboard";
import { useEffect } from 'react';
import axios from 'axios';
import { setUserData } from './redux/userSlice';
import { useDispatch } from "react-redux";
import InterviewPage from './pages/InterviewPage.jsx';
import History from "./pages/History.jsx";
import Pricing from './pages/Pricing';
import InterviewHistory from './pages/InterviewHistory.jsx';
import InterviewReport from './pages/InterviewReport.jsx';


export const ServerUrl = "http://localhost:8000";
axios.defaults.withCredentials = true;


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${ServerUrl}/api/user/current-user`, { withCredentials: true });
        dispatch(setUserData(res.data.user));

      } catch (error) {
        if (error.response?.status !== 401) {
          console.log(error);
        }
        dispatch(setUserData(null));

      }
    };
    getUser();

  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/history" element={<InterviewHistory />} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/report/:id' element={<InterviewReport/>} />


    </Routes>
  )
}

export default App;
