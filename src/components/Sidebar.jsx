

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
export function Sidebar(){
  var navi =useNavigate();
    return (<>
 
        <div className=" w-[20vw] h-[88vh]  bg-black">

        <div onClick={()=>navi('/')} className=" w-[100%] h-[14%] bg-[#121212] text-white p-2 m-2 rounded-md ">
            <div  className="flex items-center m-2 gap-2 p-2 cursor-pointer hover:bg-[#ffffff26]">
               <img className="size-7" src={assets.home_icon}  alt="" />
                <h3>Home</h3>
            </div>
            <div className="flex items-center gap-2 m-2 p-2 hover:bg-[#ffffff26]">
               <img className="size-7" src={assets.search_icon}  alt="" />
                <h3>Search</h3>
            </div>
            
        </div>
        <div className="bg-[#121212] w-[100%] h-[86%] p-2 m-2 text-white rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                <img className="size-9" src={assets.stack_icon} alt="" />
                <h3>Your Library</h3>
                </div>
                <div className="flex items-center gap-3">

                <img className="size-5" src={assets.arrow_icon} alt="" />
                <img className="size-5" src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className="bg-[#242424] rounded-md  p-4 mt-6">
                <h2 className="font-semibold mb-2">Create your first playlist</h2>
                <p>It's easy. We will help you.</p>
                <button className="bg-white text-black rounded-3xl pl-4 pr-4 pt-2 pb-2 mt-3 ">Create Playlist</button>
            </div>
            <div className="bg-[#242424] rounded-md  p-4 mt-6">
                <h2 className="font-semibold mb-2">Let's find some podcasts to follow</h2>
                <p>We will keep you update on new episodes</p>
                <button className="bg-white text-black rounded-3xl pl-4 pr-4 pt-2 pb-2 mt-3 ">Browse podcasts</button>
            </div>
        </div>
        </div>



        
    </>)
}