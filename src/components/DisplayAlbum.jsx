import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { SongItem } from "./SongItem";

export function DisplayAlbum(){

    var {id}= useParams(); //req.params.id will work in backend only
    var bgcolor= albumsData[id].bgColor;
    
    return (<>
    <div style={{backgroundImage: `linear-gradient(to bottom, ${bgcolor}, #121212)`}}>
        
    <Navbar></Navbar>
    <div className="text-white flex items-center gap-12 m-7">
        <img src={albumsData[id].image} alt="" />
        <div >

        <h3>Playlist</h3>
        <h1 className="text-5xl font-semibold">{albumsData[id].name}</h1>
        <p className="mt-3 mb-2">Your weekly updates of the most played tracks</p>
        <div className="flex items-center gap-3">
            <img src={assets.spotify_logo} alt="" />
            <h2 className="text-xl font-semibold  ">Spotify</h2>
            <h3 > 
                <ul className="flex gap-3  ">
                    <li> ● 433,233 Likes</li>
                    <li> ● 50 Songs</li>
                    <li> ● About 2hr 30min</li>
                </ul>
            </h3>

        </div>
        </div>
    </div>

    <div className="text-[#c1b7b7] grid grid-cols-4 p-4 place-items-left text-xl ml-4 items-center"> 
       
        <h2>#    Title</h2>
        <h2>Album</h2>
        <h2>Added Date</h2>
        <img className="size-5" src={assets.clock_icon } alt="" />

      
    </div>
    {songsData.map((item)=>{
        return (<>
       
       <div className="grid grid-cols-4 p-4 place-items-left text-xl ml-4 items-center text-white hover:bg-[#ffffff26]">

     
        <div className="flex gap-3 p-3 items-center">
                {item.id+1}
                <img className="size-12" src={item.image} alt="" />
                <p>{item.name}</p>
        </div>
        <p>{albumsData[id].name}</p>
        <p>5 days ago</p>
        <p>{item.duration}</p>
       </div>

       
       
        </>)
    })}
    
    </div>
    </>)
}