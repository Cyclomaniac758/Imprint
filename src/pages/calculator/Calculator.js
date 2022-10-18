import Logo from "../../logo/Logo";
import "../pages.css";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WeekBreakdown from "./WeekBreakdown";
import InTheOffice from "./InTheOffice";
import FromHome from "./FromHome";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import LinearProgressWithLabel from "./ProgressBar";
import { factors } from "./Factors";
import Timer from "../../utilities/Timer";

function Calculator(props) {
  // Parent component for the calculator, all the questions are children of this component.
  const [timer, setTimer] = useState(new Timer(props.usernum));
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(10);

  const [daysFromOffice, setDaysFromOffice] = useState(0);
  const [daysFromHome, setDaysFromHome] = useState(0);
  const [officeComplete, setOfficeComplete] = useState(false);
  const [homeComplete, setHomeComplete] = useState(false);

  const [distance, setDistance] = useState(0);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleDays, setVehicleDays] = useState({});
  const [multiVehicle, setMultiVehicle] = useState({});

  const [hours, setHours] = useState(0);
  const [camera, setCamera] = useState(true);
  const [connection, setConnection] = useState("Fibre");
  const [zoom, setZoom] = useState(1);
  const [heatingHours, setHeatingHours] = useState(0);
  const [heating, setHeating] = useState("Heatpump");

  function calculateResult() {
    timer.calculatetotal();
    timer.download("calculation.txt");
    let total = 0;
    let fromOffice = 0;
    let fromHome = 0;

    if (daysFromOffice > 0) {
      for (let vehicle in vehicleDays) {
        if (!vehicle.includes("+")) {
          fromOffice +=
            distance * factors.commuteFactors[vehicle] * vehicleDays[vehicle];
        } else {
          const twoModes = vehicle.split("+");
          for (let i in twoModes) {
            let mode = twoModes[i];
            fromOffice +=
              multiVehicle[mode] *
              factors.commuteFactors[mode] *
              vehicleDays[vehicle];
          }
        }
      }

      fromOffice = fromOffice * 50;
      total = fromOffice;
    }

    if (daysFromHome > 0) {
      //zoom bandwidth 3800mbps / 150kbps
      //teams bandwidth  4000kbps / 76kbps
      //time = hours * 3600
      // power consumption from tech in Sapere
      // 2020 power consumption emissions 0.1167

      //heating heat pump .408 kg / day assumes 6hr
      // .068 / hr
      //heating electric .815 kg / day assumes 6hr
      // 0.136 / hr

      //need to decide how many weeks for heating
      //todo substitute 7 days in a week to number of days selected by
      const heatingE =
        heatingHours * factors.heatingFactors[heating] * daysFromHome * 16;

      // const powerE2020 =  0.1167
      const powerE2020 = factors.electricityFactor;
      let bandwidth;
      // if (zoom) {
      //     bandwidth = connection==='Fixed Wireless' ? (camera ? 3.8 : .150) : 1;
      // } else {
      //     bandwidth = connection==='Fixed Wireless' ? (camera ? 4 : .076) : 1;
      // }
      // console.log(bandwidth)
      const videoE =
        factors.connectionFactors[connection] *
        hours *
        powerE2020 *
        daysFromHome *
        50;

      fromHome = heatingE + videoE;

      total += fromHome;
    }

    navigate("/result", {
      state: {
        result: Math.ceil(total),
        fromHome: Math.round(fromHome),
        fromOffice: Math.round(fromOffice),
      },
    });
  }

  const WeekBreakdownProps = {
    page,
    setPage,
    daysFromOffice,
    daysFromHome,
    setDaysFromOffice,
    setDaysFromHome,
    setOfficeComplete,
    setHomeComplete,
    setProgress,
    timer,
  };

  const InTheOfficeProps = {
    page,
    setPage,
    setOfficeComplete,
    calculateResult,
    homeComplete,
    setProgress,
    progress,
    setDistance,
    vehicles,
    setVehicles,
    vehicleDays,
    setVehicleDays,
    multiVehicle,
    setMultiVehicle,
    daysFromOffice,
    timer,
  };

  const FromHomeProps = {
    page,
    setPage,
    calculateResult,
    officeComplete,
    setOfficeComplete,
    setProgress,
    progress,
    setHours,
    setCamera,
    camera,
    setZoom,
    connection,
    setConnection,
    setHeating,
    setHeatingHours,
    timer,
  };

  return (
    <div className="page">
      <header className="heading">
        <Logo />
        <Box sx={{ width: "100%", textAlign: "center", height: "100%" }}>
          <Stack
            sx={{ width: "80%", color: "grey.500", m: "auto auto" }}
            spacing={2}
          >
            <LinearProgressWithLabel value={progress} />
          </Stack>
        </Box>
      </header>
      <Container
        sx={{ textAlign: "center", height: "100%", justifyContent: "center" }}
      >
        {(page === 1 || page === 2) && (
          <WeekBreakdown WeekBreakdownProps={WeekBreakdownProps} />
        )}
        {page > 2 && !officeComplete && (
          <InTheOffice InTheOfficeProps={InTheOfficeProps} />
        )}
        {officeComplete && page > 2 && !homeComplete && (
          <FromHome FromHomeProps={FromHomeProps} />
        )}
      </Container>
    </div>
  );
}

export default Calculator;
