const Top = () => {
    return (
        <>
            
 
       {/* numbers-display */}
        <div  className="cursor-default px-10 lg:px-10 md:px-10 pt-10 lg:mt-0 md:mt-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2">
  
       {/* Number of Organisations*/}
       <div className=" shadow-sm hover:shadow-lg p-4 bg-white  rounded h-20  max-w-[400px] duration-700">
       <span className=" justify-center  ">
           <p className="text-3xl font-semibold lg:text-2xl humidity text-center px-1 ">345</p>
           <p className="text-[8px] lg:text-xs text-center ">Affiliate Organisations</p> 
         </span>
          </div>
      {/* Total number of inactive organisations*/}
       <div className=" shadow-sm hover:shadow-lg p-4 bg-white  rounded max-h-20  max-w-[400px]  duration-700">
         <span className=" justify-center ">
           <p className="text-3xl font-semibold lg:text-2xl celcius text-center px-1 ">12</p>
           <p className="text-[8px] lg:text-xs text-center p-0 rounded-full ">Total number in districts</p> 
         </span>
       </div>
       {/*number of Villages*/}
       <div className=" shadow-sm hover:shadow-lg p-4 bg-white rounded h-20  max-w-[400px] duration-700">
       <span className=" justify-center  ">
           <p className="text-3xl font-semibold lg:text-2xl windspeed text-center px-1 ">20</p>
           <p className="text-[8px] lg:text-xs text-center">Villages</p> 
         </span>
       </div>
       {/*  number of unregistered org */}
       <div className=" shadow-sm hover:shadow-lg p-4 bg-white   rounded h-20  max-w-[400px]  duration-700">
       <span className=" justify-center  ">
           <p className="text-3xl font-semibold lg:text-2xl pressure text-center px-1 ">10</p>
           <p className="text-[8px] lg:text-xs text-center">Unregistred organisations</p> 
         </span>
       </div>
       </div>
              
            </>  
    )
}
export default Top