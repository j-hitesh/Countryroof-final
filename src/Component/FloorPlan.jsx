import { useState } from "react";
import FloorSvg from "./FloorSvg"

const FloorPlan = () => {
  const [activeRoom, setActiveRoom] = useState("bedroom");

  return (
    <div className="w-full flex justify-center">
      <div className="w-[750px] relative">

        <FloorSvg
          activeRoom={activeRoom}
          setActiveRoom={setActiveRoom}
        />

      </div>
    </div>
  );
};

export default FloorPlan;
