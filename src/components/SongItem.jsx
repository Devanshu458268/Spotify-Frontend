export function SongItem({name, desc, image,id}){
    return (<>
        <div className="cursor-pointer p-2 ml-2 mr-2 min-w-[230px] hover:bg-[#ffffff26]" >

        <img src={image} alt="" />
        <h1 className="mt-2 mb-2">{name}</h1>
        <p>{desc}</p>
        </div>
    </>)
}