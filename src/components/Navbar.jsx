import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export function Navbar(){
    var navigate= useNavigate();
    return (<>
    <div className="flex justify-between">

        <div className="flex gap-3 p-3 m-3">
            <div onClick={()=>navigate(-1)} className="rounded-full bg-black h-10 w-10 flex items-center justify-center cursor-pointer " >
                <img className="size-6" src={assets.arrow_left} alt="" />

            </div>
            <div onClick={()=>navigate(+1)} className="rounded-full bg-black h-10 w-10 flex items-center justify-center cursor-pointer" >
                <img className="size-6" src={assets.arrow_right} alt="" />

            </div>        
            </div>
            <div className="flex items-center gap-4 mr-2 ">

            <div className="bg-white pt-2 pb-2 pl-4 pr-4 rounded-3xl  cursor-pointer text-center">
                Get Premium
            </div>
            <div className="text-white bg-black pt-2 pb-2 pl-3 pr-3 rounded-3xl  cursor-pointer text-center ">Install App</div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-lime-400 text-center font-extrabold text-2xl cursor-pointer">A</div>
            </div>
    </div>

        <div className="flex gap-2 p-3 m-3">
            <div className="bg-white text-black rounded-3xl pl-4 pr-4 pt-2 pb-2   text-center cursor-pointer">All</div>
            <div className="bg-black text-white rounded-3xl  pl-4 pr-4 pt-2 pb-2  text-center cursor-pointer">Music</div>
            <div className="bg-black text-white rounded-3xl  pl-4 pr-4 pt-2 pb-2  text-center cursor-pointer">Podcasts</div>
           
        </div>
    </>)
}