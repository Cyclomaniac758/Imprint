import { Button, Typography } from "@mui/material";
import "../pages.css";
import home2 from "../../images/home2.jpg";
import Page1 from "./fromHomePages/Page1";
import Page2 from "./fromHomePages/Page2";
import React from "react";
import Page3 from "./fromHomePages/Page3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function FromHome(props) {
  function buttonClick() {
    props.FromHomeProps.timer.takeduration(
      "from home page " + (props.FromHomeProps.page - 5).toString()
    );
    if (props.FromHomeProps.page === 5 && props.FromHomeProps.officeComplete) {
      props.FromHomeProps.calculateResult();
    } else if (props.FromHomeProps.page < 8) {
      props.FromHomeProps.setProgress(props.FromHomeProps.progress + 10);
      props.FromHomeProps.setPage(props.FromHomeProps.page + 1);
      console.log(props.FromHomeProps.page);
      console.log(props.FromHomeProps.officeComplete);
    } else {
      props.FromHomeProps.calculateResult();
    }
  }

  function backButtonClick() {
    props.FromHomeProps.timer.incrementback();
    if (props.FromHomeProps.page === 3) {
      props.FromHomeProps.setProgress(20);
    } else if (props.FromHomeProps.page === 6) {
      props.FromHomeProps.setOfficeComplete(false);
      props.FromHomeProps.setProgress(props.FromHomeProps.progress - 10);
    } else {
      props.FromHomeProps.setProgress(props.FromHomeProps.progress - 10);
    }
    props.FromHomeProps.setPage(props.FromHomeProps.page - 1);
  }

  function updateHours(newHours) {
    props.FromHomeProps.setHours(newHours);
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
      {(props.FromHomeProps.page === 6 || props.FromHomeProps.page === 3) && (
        <Page1 updateHours={updateHours} />
      )}
      {(props.FromHomeProps.page === 7 || props.FromHomeProps.page === 4) && (
        <Page2
          setCamera={props.FromHomeProps.setCamera}
          camera={props.FromHomeProps.camera}
          setZoom={props.FromHomeProps.setZoom}
          connection={props.FromHomeProps.connection}
          setConnection={props.FromHomeProps.setConnection}
        />
      )}
      {(props.FromHomeProps.page === 8 || props.FromHomeProps.page === 5) && (
        <Page3
          setHeatingHours={props.FromHomeProps.setHeatingHours}
          setHeating={props.FromHomeProps.setHeating}
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
        {props.FromHomeProps.page === 8 ||
        (props.FromHomeProps.officeComplete && props.FromHomeProps.page === 5)
          ? "CALCULATE"
          : "NEXT"}
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}

export default FromHome;
