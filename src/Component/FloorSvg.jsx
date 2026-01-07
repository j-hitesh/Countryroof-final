// import floorImg from "../assets/Img/Floor1bhk.svg";
import { useState } from "react";

const FloorPlan = () => {
  const [activeRoom, setActiveRoom] = useState("bedroom");

  const roomClass = (room) =>
    activeRoom === room
      ? "fill-purple-500/40"
      : "fill-transparent hover:fill-purple-400/20";

  return (
    <div className="relative w-[700px] mx-auto">

      <img src={floorImg} alt="Floor Plan" className="w-full" />

      <svg
        viewBox="0 0 1024 768"
        className="absolute inset-0 w-full h-full"
      >
        <path
        id="bedroom"
        d="M123 456 H456 V789 Z"
        className={`${roomClass("bedroom")} cursor-pointer transition-all`}
        onClick={() => setActiveRoom("bedroom")}/>

      <path
        id="kitchen"
        d="M500 100 H800 V300 Z"
        className={`${roomClass("kitchen")} cursor-pointer transition-all`}
        onClick={() => setActiveRoom("kitchen")}/>

      <path
        id="combath"
        d="M300 100 H450 V250 Z"
        className={`${roomClass("combath")} cursor-pointer transition-all`}
        onClick={() => setActiveRoom("combath")}
      />

      </svg>
    </div>
  );
};

export default FloorPlan;
