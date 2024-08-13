import { useNavigate } from "react-router-dom";

export function AlbumItem({image, name,desc ,id}){
    var navigate= useNavigate();
    return (<>
        <div onClick={()=>{return navigate(`/album/${id}`)}} className="p-2 min-w-[260px] overflow-auto hover:bg-[#ffffff26] ">
            <img src={image} alt="" />
            <h1 className="mt-2 mb-2 font-semibold text-lg">{name}</h1>
            <p>{desc}</p>
           
        </div>
    </>)
}