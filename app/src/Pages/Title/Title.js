import React, { useEffect } from "react";
import Header from "../../shared/components/Header";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const Title = () => {
  const param = useParams();
  const type = param.type;
  const id = param.id;

  useEffect(() => {}, [id]);

  return (
    <>
      <div id="screenArea">
        <Grid container spacing={8}></Grid>
      </div>
    </>
  );
};

export default Title;
