import { Button, Typography } from "@mui/material";
import "../../pages.css";
import home2 from "../../../images/home2.jpg";
import Page1 from "./Page1";
import Page2 from "./Page2";
import React from "react";
import Page3 from "./Page3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StoreContext } from "../../../data/Store";
import { useContext } from "react";

function FromHome({calculateResult}) {

  const props = useContext(StoreContext);

  function buttonClick() {
    // props.timer.takeduration(
    //   "from home page " + (props.page - 5).toString()
    // );
    if (props.page === 5 && props.officeComplete) {
      calculateResult();
    } else if (props.page < 8) {
      props.setProgress(props.progress + 10);
      props.setPage(props.page + 1);
      console.log(props.page);
      console.log(props.officeComplete);
    } else {
      calculateResult();
    }
  }

  function backButtonClick() {
    // props.timer.incrementback();
    if (props.page === 3) {
      props.setProgress(20);
    } else if (props.page === 6) {
      props.setOfficeComplete(false);
      props.setProgress(props.progress - 10);
    } else {
      props.setProgress(props.progress - 10);
    }
    props.setPage(props.page - 1);
  }

  function updateHours(newHours) {
    props.setHours(newHours);
  }

  return (
    <div>
      <Typography variant="h5">Working From Home</Typography>
      <img
        className="image"
        src={home2}
        height="175px"
        width="auto"
        alt="logo"
      />
      {(props.page === 6 || props.page === 3) && (
        <Page1 updateHours={updateHours} />
      )}
      {(props.page === 7 || props.page === 4) && (
        <Page2
          setCamera={props.setCamera}
          camera={props.camera}
          setZoom={props.setZoom}
          connection={props.connection}
          setConnection={props.setConnection}
        />
      )}
      {(props.page === 8 || props.page === 5) && (
        <Page3
          setHeatingHours={props.setHeatingHours}
          setHeating={props.setHeating}
        />
      )}
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ mt: "50px  ", mr: "20px" }}
        onClick={backButtonClick}
      >
        <ArrowBackIcon />
        {"BACK"}
      </Button>
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ mt: "50px  " }}
        onClick={buttonClick}
      >
        {props.page === 8 ||
        (props.officeComplete && props.page === 5)
          ? "CALCULATE"
          : "NEXT"}
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}

export default FromHome;
