import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
 
  } from "@nextui-org/react";
  import { NavLink } from "react-router-dom";
  import Logo from "/logo-x.png";
  
  export default function App() {
    
  
    return (
      <>
        {/* Navbar */}
        <Navbar maxWidth="full" className="h-auto p-2 bg-gray-100 border border-b-gray-200">
          <NavbarBrand>
            <NavLink to="/">
              <img src={Logo} className="rounded-none h-16 " alt="Main logo" />
            </NavLink>
          </NavbarBrand>
  
          <NavbarContent justify="end">
            <NavbarItem>
              {/* Go Voting Button triggers the modal */}
              <Button disabled className="px-4 lg:py-2 border border-blue-950 rounded-full  font-medium text-blue-950  bg-transparent hover:scale-105 duration-700">
               Upload SVG
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
  
        
      </>
    );
  }