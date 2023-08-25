import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useParams } from "react-router-dom";

const Review = () => {
  const param = useParams();

  let products = [];

  if (param.id === "mo") {
    products = [
      {
        name: "Monlthly Subscription",
        price: "$5.00",
      },
    ];
  }

  if (param.id === "yr") {
    products = [
      {
        name: "Yearly Subscription",
        price: "$30.00",
      },
    ];
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Review;
