import React from "react";

function Star({
  stars,
  oncleakfunc,
  clickedColor,
  moseOverFunc,
  moseOvercolor,
}) {
  return (
    <div className="stars-container">
      {stars.map((star, index) => {
        return (
          <div
            onClick={() => oncleakfunc(star)}
            onMouseOver={() => {
              oncleakfunc();
              moseOverFunc(star);
            }}
            onMouseOut={() => {
              clickedColor ? oncleakfunc(clickedColor) : oncleakfunc(3);

              moseOverFunc();
            }}
            key={index}
            className={`star ${star <= clickedColor && "star-bg"} ${
              moseOvercolor >= star && "star-bg1"
            }  `}
          >
            {star}
          </div>
        );
      })}
    </div>
  );
}

export default Star;
