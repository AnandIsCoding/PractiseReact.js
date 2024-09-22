import react, { useState } from "react";
function Celebs({ details }) {
  const { name, image, profession, friends } = details;
  const [data, setData] = useState(details);
  const handleAddfriend = () => {
    setData({ ...data, friends: !data.friends });
  };
  return (
    <>
      {
        <div className="w-[17vw] h-[18vw] bg-white rounded-md overflow-hidden">
          <div className="image w-full h-[10vw] bg-[#94dede]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
          <div className="description px-1 py-1">
            <h1 className="name text-lg text-[#3554ef] mt-[5px]  ml-1">
              {" "}
              {name}{" "}
            </h1>
            <h2 className="mt-[4px] text-[#2d4dc2] ml-1">{profession}</h2>
            <button
              onClick={handleAddfriend}
              className={`px-2 py-1 mt-1 ml-1 ${
                !data.friends ? "bg-[#0be10b] hover:bg-[#049604]" : "bg-[red]"
              } rounded text-white`}
            >
              {data.friends ? "Remove Friend" : "Add Friend"}
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Celebs;
