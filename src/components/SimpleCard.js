import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "150px",
    minHeight: "80%",
    boxSizing: "border-box",
    marginRight: "10px",
  },
  text: {
    fontSize: "1.2em",
    color: "rgba(0, 0, 0, 0.8)",
    letterSpacing: "-1px",
    fontFamily: "Gilroy-Bold, sans-serif",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.text} gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
}
