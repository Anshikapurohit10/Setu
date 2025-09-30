import React from "react";
import {Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
const Layout = () => {
  const location = useLocation();

  const authRoutes = ["/login", "/register"];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className={isAuthPage ? "auth-bg min-h-screen flex items-center justify-center" : "min-h-screen bg-gray-50"}>
      {isAuthPage ? (

       

        <Outlet />
      ) : (
         <>
       
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header className="sticky top-0 z-50"  />
          </div>

         {/* <div className="layout">
  <div className="sidebar">
   
  </div>
  <div className="main-content">
    
  </div>
</div> */}

          <div className="flex ">
            <SideBar/>
            <main className="flex-1 p-6 bg-gray-50 overflow-y-auto mt-16transition-all duration-300 "  style={{ marginLeft: "70px" }} >
              <Outlet />
            </main> 
           </div>
        </>
 
      )}
     </div>
  );
};

export default Layout;
