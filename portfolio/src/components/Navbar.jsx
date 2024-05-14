import React from "react";

function Navbar(){
          return(
            <>
              <div className="bg-red-500 p-7 fixed w-full"> 
                 <div className="flex justify-around items-center gap-11">
                   <div>
                      <p className="text-2xl font-bold">Andre Jarl</p>
                   </div>
                   <div className="flex justify-center items-center">
                     <ul className="list-none flex gap-10 font-semibold">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                     </ul>
                   </div>
              </div>
              </div>
            </>
          )
}

export default  Navbar;