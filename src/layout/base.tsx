import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../components/menu/nav";
// import Footer from "../components/menu/footer";
 
 
const BaseLayout = () => {
  const location = useLocation();
  const isloginPage = location.pathname.includes("/login");
  const isSignupPage = location.pathname.includes("/signup");
  
  return (
    <>
 
      {!isloginPage && !isSignupPage && <  MainNav />}
      <main>
        <Outlet />
      </main>
     {/* <Footer/> */}
    </>
  );
};

export default BaseLayout;