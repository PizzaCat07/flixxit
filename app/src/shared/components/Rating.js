import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { getRatings } from "../functions/rating";
import { useParams } from "react-router-dom";

const Rating = () => {
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [thumb, setThumb] = useState("none");
  const param = useParams();
  const id = param.id;
  console.log(thumb, upCount, downCount);

  useEffect(() => {
    getRatings(id, setUpCount, setDownCount, setThumb);
  }, []);

  return (
    <>
      <div className="ratingContainer">
        <div className="thumbContainer">
          <ThumbUpOffAltIcon />
          <div>{upCount}</div>
        </div>
        <div className="thumbContainer">
          <ThumbDownOffAltIcon />
          <div>{downCount}</div>
        </div>
      </div>
    </>
  );
};

export default Rating;
