import { albumsData, assets, songsData } from "../assets/assets";
import { AlbumItem } from "./AlbumItem";
import { Navbar } from "./Navbar";
import { SongItem } from "./SongItem";

export function DisplayHome(){
    return (<>
   


      <Navbar></Navbar>
      <div className="overflow-auto" >
        <h1 className="text-4xl p-2 text-white">Featured Charts</h1>
        <div className="flex gap-4 text-white cursor-pointer ">
            {albumsData.map((item)=>{
                return <AlbumItem id={item.id} image={item.image} desc={item.desc} name={item.name}></AlbumItem>
            })}
      </div>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl p-2 text-white">Today's biggest hits</h1>
        <div className="flex gap-4 text-white cursor-pointer overflow-auto ">
            {songsData.map((item)=>{
                return <SongItem id={item.id} image={item.image} desc={item.desc} name={item.name}></SongItem>
            })}
      </div>
      </div>
 
    </>)
}