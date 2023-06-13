import React from "react";
import LayoutPage from "./LayoutPage";
// import { Outlet } from "react-router-dom";

const Home=()=>{

    return(
        <div>
            <LayoutPage />
            {/* <Outlet /> */}
            <h2>Home Page</h2>
        </div>
    );
}
export default Home;