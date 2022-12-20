import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Template from "../components/Layout/Template/Template";
import { useState } from "react";
import Pagination from 'react-responsive-pagination';
import MainScreen from "../components/Screens/MainScreen/MainScreen";
// import Pagination from 'rc-pagination';

const Home: NextPage = () => {
  
  return (
    <Template>
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '3em',
        justifyContent: "center"
      }}>Markets</div>
    </Template>
  );
};

export default Home;