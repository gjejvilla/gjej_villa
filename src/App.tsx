import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contact from './screens/Contact';
import Navbar from './screens/Navbar';
import House from './screens/House';
import { Box, Typography } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Villa/:id",
    element: <House />,
  },
]);

function App() {
  return (
    <div className="App" style={{backgroundColor:'#F9F9F9',}}>
        <Navbar />
       <RouterProvider router={router} />
        <Box py={3} sx={{backgroundColor:'#748867'}}>
        <Typography color="white">GjejVilla</Typography>
      </Box>
    </div>
  );
}

export default App;
