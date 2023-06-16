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
      {stars.map((star) => {
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
            key={star}
            className={`star-gray ${star <= clickedColor && "star-yellow"} ${
              moseOvercolor >= star && "star-green"
            }  `}
          ></div>
        );
      })}
    </div>
  );
}

export default Star;
