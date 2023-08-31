import React, { useEffect, useRef, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { getRatings, updateRating } from "../functions/rating";
import { useParams } from "react-router-dom";

const Rating = () => {
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [thumb, setThumb] = useState("none");
  //const [update, setUpdate] = useState(false);
  const update = useRef(0);
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    getRatings(id, setUpCount, setDownCount, setThumb);
  }, [update]);

  if (update.current > 0) {
    updateRating(id, thumb, upCount, downCount);
  }

  const thumbUpHandler = () => {
    if (thumb == "up") {
      setThumb("none");
      setUpCount(upCount - 1);
    }
    if (thumb == "down") {
      setThumb("up");
      setUpCount(upCount + 1);
      setDownCount(downCount - 1);
    }
    if (thumb == "none") {
      setThumb("up");
      setUpCount(upCount + 1);
    }
    update.current = update.current + 1;
  };

  const thumbDownHandler = () => {
    if (thumb == "up") {
      setThumb("down");
      setDownCount(downCount + 1);
      setUpCount(upCount - 1);
    }
    if (thumb == "down") {
      setThumb("none");
      setDownCount(downCount - 1);
    }
    if (thumb == "none") {
      setThumb("down");
      setDownCount(downCount + 1);
    }
    update.current = update.current + 1;
  };

  return (
    <>
      <div className="ratingContainer">
        <div className="thumbContainer">
          {thumb == "down" || thumb == "none" ? (
            <div onClick={() => thumbUpHandler()}>
              <ThumbUpOffAltIcon />
            </div>
          ) : (
            <div onClick={() => thumbUpHandler()}>
              <ThumbUpIcon />
            </div>
          )}
          <div className="countContainer">{upCount}</div>
        </div>
        <div className="thumbContainer">
          {thumb == "up" || thumb == "none" ? (
            <div onClick={() => thumbDownHandler()}>
              <ThumbDownOffAltIcon />
            </div>
          ) : (
            <div onClick={() => thumbDownHandler()}>
              <ThumbDownIcon />
            </div>
          )}
          <div className="countContainer">{downCount}</div>
        </div>
      </div>
    </>
  );
};

export default Rating;
