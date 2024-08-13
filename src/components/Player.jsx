import { assets, songsData } from "../assets/assets";

export function Player(){
    return (<>
        <div className="hidden lg:flex justify-between items-center text-white">
          
            <div className="text-white flex p-4 gap-4">
                <img className="size-16" src={songsData[0].image} alt="" />
                <div className="m-2">
                    <h3>{songsData[0].name}</h3>
                    <p>{songsData[0].desc.slice(0,11)}</p>
                </div>
            </div>
           

            <div>
                <div className="flex gap-6 items-center justify-center opacity-75">
                    <img className="size-5" src={assets.shuffle_icon} alt="" />
                    <img className="size-5" src={assets.prev_icon} alt="" />
                    <img className="size-5" src={assets.play_icon} alt="" />
                    <img className="size-5" src={assets.next_icon} alt="" />
                    <img className="size-5" src={assets.loop_icon} alt="" />
                </div>
                <div className="flex p-2 items-center gap-3">
                <h2>1:03</h2>
                <div className=" w-[25vw]  bg-gray-300 rounded-full cursor-pointer">
                <hr className="h-2 w-[50%] bg-green-900 rounded-full border-none " />
                </div>
               
                <h2>3:02</h2>
                </div>
            
            </div>

            <div></div>
        </div>
    </>)
}