import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DisplayHome } from "./DisplayHome";
import { DisplayAlbum } from "./DisplayAlbum";

export function Display(){
    return (<>
    <div className=" bg-[#121212] w-[80vw] overflow-auto p-2 m-2 rounded-md ">
   
        <Routes>
            <Route path="/" element={<DisplayHome></DisplayHome>}></Route>
            <Route path="/album/:id" element={<DisplayAlbum />}></Route>
        </Routes>
   

    </div>
    </>)
}