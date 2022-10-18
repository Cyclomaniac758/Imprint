import "../../pages.css";
import { Button, Typography } from "@mui/material";
import office from "../../../images/office.jpg";
import React from "react";
import OfficePage1 from "./OfficePage1";
import OfficePage2 from "./OfficePage2";
import OfficePage3 from "./OfficePage3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StoreContext } from "../../../data/Store";
import { useContext } from "react";

function InTheOffice({calculateResult}) {

  const props = useContext(StoreContext);
  const totalDaysDriving = props.daysFromOffice;

  function buttonClick() {
    // call timer
    // props.timer.takeduration('in the office page '+(props.page-2).toString());
    if (
      props.page === 5 &&
      props.homeComplete
    ) {
      calculateResult();
    } else if (
      props.page === 5 &&
      !props.officeComplete
    ) {
      props.setOfficeComplete(true);
      props.setProgress(props.progress + 10);
      props.setPage(props.page + 1);
    } else if (
      props.page === 4 &&
      props.vehicles.length < 2 &&
      props.homeComplete
    ) {
      calculateResult();
    } else if (
      props.page === 4 &&
      props.vehicles.length < 2
    ) {
      props.setOfficeComplete(true);
      const vehicle = props.vehicles[0];
      var daysPerTravelMode = props.daysPerTravelMode;
      daysPerTravelMode[vehicle] = totalDaysDriving;
      props.setDaysPerTravelMode(daysPerTravelMode);
      props.setProgress(props.progress + 20);
      props.setPage(props.page + 2);
    } else {
      props.setProgress(props.progress + 10);
      props.setPage(props.page + 1);
    }
  }

  function backButtonClick() {
    // call timer utility
    // props.timer.incrementback();

    if (props.page === 3) {
      props.setProgress(20);
    } else {
      props.setProgress(props.progress - 10);
    }
    props.setPage(props.page - 1);
  }

  return (
    <div>
      <Typography variant="h5">Working In The Office</Typography>
      <img
        className="image"
        src={office}
        height="175px"
        width="auto"
        alt="logo"
      />
      {props.page === 3 && (
        <OfficePage1 setDistance={props.setDistance} />
      )}
      {props.page === 4 && (
        <OfficePage2
          vehicles={props.vehicles}
          setVehicles={props.setVehicles}
          multiVehicle={props.multiVehicle}
          setMultiVehicle={props.setMultiVehicle}
        />
      )}
      {props.page === 5 && (
        <OfficePage3
          vehicles={props.vehicles}
          setVehicles={props.setVehicles}
          vehicleDays={props.daysPerTravelMode}
          setVehicleDays={props.setDaysPerTravelMode}
          daysFromOffice={props.daysFromOffice}
        />
      )}
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ mt: "50px  ", mr: "20px", mb: "100px" }}
        onClick={backButtonClick}
      >
        <ArrowBackIcon />
        {"BACK"}
      </Button>
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{ mt: "50px", mb: "100px" }}
        onClick={buttonClick}
      >
        {props.homeComplete &&
        props.page === 5
          ? "CALCULATE"
          : "NEXT"}
        <ArrowForwardIcon />
      </Button>
    </div>
  );
}

export default InTheOffice;
