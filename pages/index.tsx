import type { NextPage } from "next";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Template from "../components/Layout/Template/Template";
import { useState } from "react";
import Pagination from 'react-responsive-pagination';
import MainScreen from "../components/Screens/MainScreen/MainScreen";
// import Pagination from 'rc-pagination';

const Home: NextPage = () => {
  const [totalPages, setTotalPages] = useState(120);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }


  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <Template>
      <MainScreen />
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() => {
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true));

        }}
      >
        {authState ? "Logout" : "LogIn"}
      </button>

      <div style={{
        maxWidth: 500
      }}>
       
        {/* <Pagination
          // narrowStrategy={['dropNav', 'dropEllipsis']}
          narrowStrategy={'dropNav'}
          total={totalPages}
          current={currentPage}
          onPageChange={page => handlePageChange(page)}
        /> */}
      </div>
    </Template>
  );
};

export default Home;